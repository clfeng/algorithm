function maxPoints(points: number[][]): number {
  if (points.length <= 2) {
    return points.length;
  }

  let max = 0;
  for (let i = 0; i < points.length; i++) {
    const iMap = new Map<string, number>();
    if (max > points.length / 2 || max >= points.length - i) {
      return max;
    }

    for (let j = i + 1; j < points.length; j++) {
      let disX = points[i][0] - points[j][0];
      let disY = points[i][1] - points[j][1];

      if (disX === 0) {
        disY = 1;
      } else if (disY === 0) {
        disX = 1;
      } else {
        if (disY < 0) {
          disX = -disX;
          disY = -disY;
        }
        const gcdXY = gcd(disX, disY);
        disX /= gcdXY;
        disY /= gcdXY;
      }

      const key = `${disY}/${disX}`;
      iMap.set(key, (iMap.get(key) || 0) + 1)
    }

    for (const count of iMap.values()) {
      max = Math.max(max, count + 1);
    }
  }

  return max;

  function gcd(a: number, b: number): number {
    return b != 0 ? gcd(b, a % b) : a;
  }
};
