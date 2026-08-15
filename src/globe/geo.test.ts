import { describe, expect, it } from "vitest";
import { latLonToLocal, parseGeoDataset } from "./geo";

describe("latLonToLocal", () => {
  it("places the equator / prime meridian on +X", () => {
    const p = latLonToLocal(0, 0);
    expect(p.x).toBeCloseTo(1, 5);
    expect(p.y).toBeCloseTo(0, 5);
    expect(p.z).toBeCloseTo(0, 5);
  });

  it("places the north pole on +Y", () => {
    const p = latLonToLocal(90, 0);
    expect(p.x).toBeCloseTo(0, 5);
    expect(p.y).toBeCloseTo(1, 5);
    expect(p.z).toBeCloseTo(0, 5);
  });
});

describe("parseGeoDataset", () => {
  it("reads generic geographic points", () => {
    const points = parseGeoDataset([
      { id: "a", name: "Example", lat: 1.3, lon: 103.8, category: "city" },
    ]);
    expect(points).toHaveLength(1);
    expect(points[0].name).toBe("Example");
  });
});
