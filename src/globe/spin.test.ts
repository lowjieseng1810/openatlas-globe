import { describe, expect, it } from "vitest";
import {
  AUTO_ROTATE_RAD_PER_SEC,
  earthSpinDelta,
  shouldAutoRotateEarth,
} from "./spin";

describe("shouldAutoRotateEarth", () => {
  it("spins when enabled and idle", () => {
    expect(
      shouldAutoRotateEarth({
        enabled: true,
        dragging: false,
        flightActive: false,
      }),
    ).toBe(true);
  });

  it("pauses while the user is dragging", () => {
    expect(
      shouldAutoRotateEarth({
        enabled: true,
        dragging: true,
        flightActive: false,
      }),
    ).toBe(false);
  });

  it("pauses during fly-to", () => {
    expect(
      shouldAutoRotateEarth({
        enabled: true,
        dragging: false,
        flightActive: true,
      }),
    ).toBe(false);
  });

  it("stays still when the control is off", () => {
    expect(
      shouldAutoRotateEarth({
        enabled: false,
        dragging: false,
        flightActive: false,
      }),
    ).toBe(false);
  });
});

describe("earthSpinDelta", () => {
  it("scales with elapsed time", () => {
    expect(earthSpinDelta(0.016)).toBeCloseTo(AUTO_ROTATE_RAD_PER_SEC * 0.016);
    expect(earthSpinDelta(0.032)).toBeCloseTo(AUTO_ROTATE_RAD_PER_SEC * 0.032);
  });

  it("caps long frame gaps", () => {
    expect(earthSpinDelta(1)).toBeCloseTo(AUTO_ROTATE_RAD_PER_SEC * 0.05);
  });

  it("ignores invalid or zero dt", () => {
    expect(earthSpinDelta(0)).toBe(0);
    expect(earthSpinDelta(-1)).toBe(0);
    expect(earthSpinDelta(Number.NaN)).toBe(0);
  });
});
