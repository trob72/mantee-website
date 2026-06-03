# Static Prototype

This folder contains the placeholder-based static prototype for the Town of Mantee website.

## Open Directly

Open `index.html` in a browser.

## Serve Locally

From this folder:

```powershell
python -m http.server 8088 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8088/
```

## Prototype Notes

- All unknown facts remain marked `NEEDS_CONFIRMATION`.
- Local photography is represented by placeholder images.
- The prototype preserves the intended navigation and page structure.
- The future production site is expected to be managed WordPress.

## Photo Replacement

Image slots live in `assets/images/`.

See:

- `assets/images/README.md`
- `assets/images/photo-manifest.csv`

To update the look without editing HTML, replace the named placeholder SVG files with approved web-ready photo files using the same filenames, or update the HTML references to point at `.jpg` or `.webp` files.
