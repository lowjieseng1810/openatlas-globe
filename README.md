# OpenAtlas Globe

Reusable 3D Earth for geographic visualization. Drag to orbit, fly to a focus region, and plot generic lat/lon points — without a backend.

This is not a from-scratch globe. The renderer is the World Explorer Earth implementation from Malaysia Linguistics Lab, extracted so it can run as a standalone Vite app.

## Demo

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://127.0.0.1:5173`).

Live origin of the source experience: [https://malaysialinguisticlab.com/](https://malaysialinguisticlab.com/)

## Features

- Cinematic Earth with day texture, specular/normal maps, and cloud layer
- Atmosphere (inner + outer Fresnel limb)
- Multi-layer starfield and faint nebula
- ACES filmic tone mapping and directional lighting
- Pointer drag with inertia; optional cinematic fly-to
- JSON lat/lon markers projected onto the globe
- Responsive layout (sidebar stacks on small screens)
- No server, database, login, or AI API

## Technology

- TypeScript (demo shell, data helpers, tests)
- Three.js `0.128.0` (same generation as the original CDN `r128` build)
- Vite
- HTML/CSS for the demo chrome

## Installation

Requires Node.js 20+.

```bash
git clone https://github.com/lowjieseng1810/openatlas-globe.git
cd openatlas-globe
npm install
```

## Quick Start

```bash
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Usage

1. Mount a `#globe-stage` element (required by the extracted renderer).
2. Optionally provide `#explore-world-button` to trigger the cinematic fly-to.
3. Set focus coordinates before the globe boots:

```ts
window.OPENATLAS_GLOBE = {
  focusLat: 3.14,
  focusLon: 101.69,
};
```

4. After `earthExplorerReady`, use `window.EarthExplorer.projectLatLon(lat, lon)` to place HTML markers.

The demo does this in `src/main.ts` and `src/demo/markers.ts`.

## Data format

Generic points, not a Malaysia-only schema:

```json
[
  {
    "id": "example",
    "name": "Example",
    "lat": 1.3,
    "lon": 103.8,
    "category": "city",
    "summary": "Any geographic dataset: heritage, migration, education, research, routes."
  }
]
```

Replace `public/data/example-malaysia-languages.json` with your own file. The bundled Malaysia language coordinates are **demo data** copied from the original explorer overlay and are not linguistic authority.

## Customization

| Option | Where | Effect |
| --- | --- | --- |
| `focusLat` / `focusLon` | `window.OPENATLAS_GLOBE` | Fly-to target and 3D focus marker |
| `assetBaseUrl` | `window.OPENATLAS_GLOBE` | Override texture directory |
| Textures | `public/textures/earth/` | Day / normal / specular / clouds |
| Marker dataset | `public/data/*.json` | Any lat/lon collection |
| Demo chrome | `index.html`, `src/demo/styles.css` | Layout only; does not change shaders |

## Project structure

```
openatlas-globe/
  index.html                 # demo page
  public/textures/earth/     # Earth maps copied from the source project
  public/data/               # example geographic JSON
  src/globe/earth-globe.js   # extracted renderer (original shaders/scene)
  src/globe/geo.ts           # lat/lon helpers + JSON parser
  src/demo/                  # new standalone UI / markers
  src/config.ts              # demo focus coordinates
  ATTRIBUTIONS.md
  LICENSE
```

## Examples

- **Language locations** — bundled demo JSON (Malaysia minority languages, labeled as example data).
- **Cultural heritage / migration / education / research / historical routes** — same JSON shape; only coordinates and copy change.

## Performance

- Default day map is the original `earth_day_8k.jpg` (~4.5 MB). First load is texture-bound.
- Pixel ratio is capped at 2 (preserved from the source renderer).
- For weaker devices, swap in a smaller day texture via `public/textures/earth/`.

## Origin & Attribution

OpenAtlas Globe was **extracted and refactored** from the 3D Earth / World Explorer implementation originally developed for **Malaysia Linguistics Lab**.

- Original GitHub repository: [https://github.com/lowjieseng1810/malaysia-linguistics-lab](https://github.com/lowjieseng1810/malaysia-linguistics-lab)
- Original website: [https://malaysialinguisticlab.com/](https://malaysialinguisticlab.com/)

This repository contains reusable code **derived from** that Earth / World Explorer. It was **not** originally created as OpenAtlas Globe.

| Kind | What |
| --- | --- |
| Original extracted code | `src/globe/earth-globe.js` (from `static/js/earth-globe.js`), Earth textures under `public/textures/earth/`, lat/lon sphere math, atmosphere/cloud/starfield/lighting/camera/drag/flight |
| Refactored code | ES module + `three` npm import; configurable focus lat/lon and texture base URL; app-specific fallback copy removed; unused moon texture not shipped |
| Newly added code | Vite/TypeScript demo shell, generic JSON markers, `geo.ts` helpers/tests, this README, ATTRIBUTIONS |

The source Malaysia Linguistics Lab application (Flask, auth, AI tutor, lessons, dictionary, quizzes) is **not** part of this repository.

## Contributing

Issues and pull requests are welcome. Keep changes focused on the globe runtime or demo. Do not add a backend, database, authentication, or AI client.

## License

MIT License. See [LICENSE](LICENSE).

Third-party and bundled assets: [ATTRIBUTIONS.md](ATTRIBUTIONS.md).
