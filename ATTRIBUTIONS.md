# Attributions

## Source project

OpenAtlas Globe is derived from **Malaysia Linguistics Lab**.

- Repository: https://github.com/lowjieseng1810/malaysia-linguistics-lab
- Website: https://malaysialinguisticlab.com/
- Original renderer: `static/js/earth-globe.js`
- Original textures: `static/images/earth/`

The original project is licensed under MIT (Copyright 2026 Low Jie Seng). This repository keeps that MIT license for the extracted code.

## Runtime

- [Three.js](https://github.com/mrdoob/three.js) r128 — MIT License

## Earth textures

These files were copied from Malaysia Linguistics Lab and were **not documented with an upstream source or license in that repository**:

| File | Used in OpenAtlas Globe |
| --- | --- |
| `earth_day_8k.jpg` | Yes (day albedo) |
| `earth_normal.jpg` | Yes |
| `earth_specular.jpg` | Yes |
| `earth_clouds.png` | Yes |
| `earth_day.jpg` | No (lower-res unused duplicate) |
| `earth_night.png` | No (source renderer does not load night lights) |
| `moon_8k.jpg` | No (moon mesh was hidden in the source renderer) |

Do not treat the undocumented maps as NASA / Solar System Scope / public-domain unless you independently verify the upstream. If you need a guaranteed-redistributable set, replace the files in `public/textures/earth/` with maps whose license you can cite (for example NASA Visible Earth public-domain mosaics, or [Solar System Scope](https://www.solarsystemscope.com/textures/) textures under their stated CC-BY terms).

This project does **not** invent an upstream license for those copied files.

## Demo data

`public/data/example-cities.json` is invented demo geography for the generic marker system. It is not a language map.
