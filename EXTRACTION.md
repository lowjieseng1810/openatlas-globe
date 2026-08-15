# Extraction map (source → OpenAtlas Globe)

Source repo: Malaysia Linguistics Lab  
New repo: OpenAtlas Globe

## Copied / extracted

| Source | Destination | Notes |
| --- | --- | --- |
| `static/js/earth-globe.js` | `src/globe/earth-globe.js` | Core renderer |
| `static/images/earth/earth_day_8k.jpg` | `public/textures/earth/` | Day albedo |
| `static/images/earth/earth_normal.jpg` | `public/textures/earth/` | |
| `static/images/earth/earth_specular.jpg` | `public/textures/earth/` | |
| `static/images/earth/earth_clouds.png` | `public/textures/earth/` | |
| LICENSE (MIT) | `LICENSE` | Same author |

## Referenced but not copied (app-specific)

- `templates/dashboard.html` — Flask dashboard chrome
- `static/css/universe-landing.css`, `static/css/dashboard.css` — app layout
- `static/js/language-universe.js` — Malaysia course overlay (coords reused as demo JSON only)
- `static/js/dashboard.js` — course / explorer state
- Flask, SQLite, auth, AI tutor, lessons, dictionary, quizzes

## Intentionally not copied

- `earth-globe_before_dynamic_cloud.js` (stale snapshot)
- `moon_8k.jpg` (hidden unused mesh)
- `earth_night.png`, `earth_day.jpg` (unused by current renderer)
