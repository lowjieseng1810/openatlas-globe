import "./config";
import "./demo/styles.css";
import "./globe/earth-globe.js";
import { mountDemoMarkers } from "./demo/markers";

window.addEventListener("earthExplorerReady", () => {
  const status = document.getElementById("globe-status-text");
  if (status) {
    status.textContent = "Earth ready · drag to rotate";
  }
  void mountDemoMarkers();
});
