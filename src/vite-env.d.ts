/// <reference types="vite/client" />

export type GlobePoint = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  category?: string;
  summary?: string;
};

export type OpenAtlasGlobeConfig = {
  focusLat?: number;
  focusLon?: number;
  assetBaseUrl?: string;
};

export type EarthExplorerApi = {
  isHeroReady: () => boolean;
  getDomElement: () => HTMLCanvasElement;
  getContainer: () => HTMLElement;
  projectLatLon: (
    latDeg: number,
    lonDeg: number,
    radius?: number
  ) => { x: number; y: number; visible: boolean; facing: number };
};

declare global {
  interface Window {
    OPENATLAS_GLOBE?: OpenAtlasGlobeConfig;
    EarthExplorer?: EarthExplorerApi;
  }
}

export {};
