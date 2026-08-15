/** Slow cinematic spin around Earth's polar axis (radians per second). */
export const AUTO_ROTATE_RAD_PER_SEC = 0.016;

export function shouldAutoRotateEarth(options: {
  enabled: boolean;
  dragging: boolean;
  flightActive: boolean;
}): boolean {
  return options.enabled && !options.dragging && !options.flightActive;
}

export function earthSpinDelta(
  dtSeconds: number,
  radPerSec = AUTO_ROTATE_RAD_PER_SEC,
): number {
  if (!Number.isFinite(dtSeconds) || dtSeconds <= 0) {
    return 0;
  }
  return Math.min(dtSeconds, 0.05) * radPerSec;
}
