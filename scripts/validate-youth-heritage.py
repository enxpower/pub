#!/usr/bin/env python3
from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
import struct
import sys

ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "youth-heritage-100" / "page.html"
ENTRY = ROOT / "youth-heritage-100" / "index.html"
OG = ROOT / "youth-heritage-100" / "og-image.png"


class AnchorParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: set[str] = set()
        self.targets: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        element_id = values.get("id")
        href = values.get("href")
        if element_id:
            self.ids.add(element_id)
        if href and href.startswith("#") and len(href) > 1:
            self.targets.append(href[1:])


def fail(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(1)


def main() -> None:
    page = PAGE.read_text(encoding="utf-8")
    entry = ENTRY.read_text(encoding="utf-8")

    parser = AnchorParser()
    parser.feed(page)
    missing = sorted(set(parser.targets) - parser.ids)
    if missing:
        fail(f"missing internal anchor targets: {missing}")

    expected_targets = {
        "top", "vision", "model", "governance", "systems",
        "space", "business", "trust", "join",
    }
    absent = sorted(expected_targets - parser.ids)
    if absent:
        fail(f"required section ids absent: {absent}")

    required_entry_fragments = (
        "pointer-events:none;content:\"100\";",
        ".actions{position:relative;z-index:2;display:flex;",
        ".btn{position:relative;z-index:1;padding:",
        'og:image:secure_url',
        'og:image:width\" content=\"300',
        'og:image:height\" content=\"300',
        'include_relative page.html',
    )
    for fragment in required_entry_fragments:
        if fragment not in entry:
            fail(f"entry template missing required fragment: {fragment}")

    png = OG.read_bytes()
    if png[:8] != b"\x89PNG\r\n\x1a\n":
        fail("og-image.png is not a valid PNG")
    width, height = struct.unpack(">II", png[16:24])
    if (width, height) != (300, 300):
        fail(f"og-image.png must be 300x300, found {width}x{height}")

    print("OK: all internal anchors resolve")
    print("OK: required click-layer protections are present")
    print("OK: social metadata is complete")
    print(f"OK: og-image.png is {width}x{height} PNG")


if __name__ == "__main__":
    main()
