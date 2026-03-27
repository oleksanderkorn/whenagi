# whenagi.help

A tiny static site that answers one question with a suspicious level of confidence.

Live site: `https://whenagi.help/`

## What It Is

`whenagi.help` is a lightweight single-page website built with plain HTML, CSS, and JavaScript.
It asks:

`Is AGI achieved?`

And it always answers yes.

## Project Structure

- `index.html` contains the page markup, metadata, and analytics snippet.
- `styles.css` contains the visual system and responsive layout.
- `script.js` controls the reveal interaction and rotating answer notes.
- `robots.txt` and `sitemap.xml` support search indexing.

## Local Development

Because this is a static site, any simple local server works.

Examples:

```bash
python3 -m http.server 8000
```

or

```bash
npx serve .
```

Then open `http://localhost:8000`.

## Deployment

Deploy the contents of this repository to any static host.

The production domain is:

`https://whenagi.help/`

## Analytics

The site uses GoatCounter for privacy-friendly traffic analytics.

## Contributing

Small, focused pull requests are preferred.
See `CONTRIBUTING.md`.

## License

MIT. See `LICENSE`.
