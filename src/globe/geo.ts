/**
 * Same lat/lon → local sphere vector used by the extracted Earth renderer
 * (`earth-globe.js` Malaysia flight / marker math).
 */
export function latLonToLocal(latDeg: number, lonDeg: number): {
  x: number;
  y: number;
  z: number;
} {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180;
  return {
    x: Math.cos(lat) * Math.cos(lon),
    y: Math.sin(lat),
    z: -Math.cos(lat) * Math.sin(lon),
  };
}

export type GeoPoint = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  category?: string;
  summary?: string;
};

export function parseGeoDataset(raw: unknown): GeoPoint[] {
  if (!Array.isArray(raw)) {
    throw new Error("Dataset must be a JSON array of points.");
  }
  return raw.map((item, index) => {
    if (!item || typeof item !== "object") {
      throw new Error(`Invalid point at index ${index}`);
    }
    const row = item as Record<string, unknown>;
    const lat = Number(row.lat);
    const lon = Number(row.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      throw new Error(`Point ${index} needs numeric lat and lon`);
    }
    return {
      id: String(row.id ?? `point-${index}`),
      name: String(row.name ?? `Point ${index + 1}`),
      lat,
      lon,
      category: row.category ? String(row.category) : undefined,
      summary: row.summary ? String(row.summary) : undefined,
    };
  });
}
