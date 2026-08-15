import { parseGeoDataset, type GeoPoint } from "../globe/geo";

export async function mountDemoMarkers(): Promise<void> {
  const stage = document.getElementById("globe-stage");
  const explorer = window.EarthExplorer;
  if (!stage || !explorer) {
    return;
  }

  const response = await fetch(`${import.meta.env.BASE_URL}data/example-cities.json`);
  const points = parseGeoDataset(await response.json());

  const layer = document.createElement("div");
  layer.className = "atlas-markers";
  layer.setAttribute("aria-label", "Example geographic markers");
  stage.appendChild(layer);

  const nodes = new Map<string, HTMLButtonElement>();
  const panel = document.getElementById("marker-detail");

  points.forEach((point) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "atlas-marker";
    button.textContent = point.name;
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      showPoint(panel, point);
    });
    layer.appendChild(button);
    nodes.set(point.id, button);
  });

  const tick = () => {
    points.forEach((point) => {
      const el = nodes.get(point.id);
      if (!el) {
        return;
      }
      const projected = explorer.projectLatLon(point.lat, point.lon, 1.04);
      el.style.transform = `translate(${projected.x}px, ${projected.y}px) translate(-50%, -50%)`;
      el.style.opacity = projected.visible ? "1" : "0";
      el.style.pointerEvents = projected.visible ? "auto" : "none";
    });
    requestAnimationFrame(tick);
  };

  tick();
}

function showPoint(panel: HTMLElement | null, point: GeoPoint): void {
  if (!panel) {
    return;
  }
  panel.hidden = false;
  panel.innerHTML = `
    <p class="eyebrow">Example marker</p>
    <h2>${escapeHtml(point.name)}</h2>
    <p>${escapeHtml(point.summary || "")}</p>
    <p class="coords">${point.lat.toFixed(2)}°, ${point.lon.toFixed(2)}°</p>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
