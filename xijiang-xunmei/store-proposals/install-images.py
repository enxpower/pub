from pathlib import Path
import base64, zipfile, io
DATA = Path(__file__).with_name('images.b64').read_text().strip()
out = Path(__file__).parent
with zipfile.ZipFile(io.BytesIO(base64.b64decode(DATA))) as z:
    z.extractall(out)
print('installed', len(list(out.glob('store-*.jpg'))), 'store images')
