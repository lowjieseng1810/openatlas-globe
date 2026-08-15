import "./config";
import "./demo/styles.css";
import "./globe/earth-globe.js";
import { mountDemoMarkers } from "./demo/markers";

window.addEventListener("earthExplorerReady", () => {
  void mountDemoMarkers();
});
