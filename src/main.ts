import "./config";
import "./demo/styles.css";
import "./globe/earth-globe.js";
import { mountDemoMarkers } from "./demo/markers";

function syncAutoRotateButton(button: HTMLButtonElement) {
  const on = window.EarthExplorer?.isAutoRotate?.() ?? true;
  button.setAttribute("aria-pressed", on ? "true" : "false");
  button.textContent = on ? "Auto rotate: On" : "Auto rotate: Off";
}

window.addEventListener("earthExplorerReady", () => {
  const status = document.getElementById("globe-status-text");
  if (status) {
    status.textContent = "Earth ready · drag to rotate";
  }
  const autoRotate = document.getElementById("auto-rotate");
  if (autoRotate instanceof HTMLButtonElement) {
    syncAutoRotateButton(autoRotate);
    autoRotate.addEventListener("click", () => {
      const next = !(window.EarthExplorer?.isAutoRotate?.() ?? true);
      window.EarthExplorer?.setAutoRotate?.(next);
      syncAutoRotateButton(autoRotate);
    });
  }
  void mountDemoMarkers();
});
