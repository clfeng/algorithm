function numberOfBoomerangs(points: number[][]): number {
  if (points.length < 3) {
    return 0;
  }

  let count = 0;
   
  // i 为当前选中的点
  for(let i = 0; i < points.length; i++) {
    // iMap 用于将到i节点的距离相同的点进行聚合
    const iMap = new Map<number, number[]>();

    for(let j = 0; j < points.length; j++) {
      if (i === j) {
        continue;
      }

      const distance = calcDistance(points[i] as [number, number], points[j] as [number, number]);
      if (iMap.has(distance)) {
        const arr = iMap.get(distance)!;
        arr.push(j)
      } else {
        iMap.set(distance, [j]);
      }
    }

    // 进行统计
    for (const item of iMap.values()) {
        const len = item.length;
        if (len > 1) {
          count += len * (len - 1);
        }
    }
  }

  return count;

  function calcDistance (pointA: [number, number], pointB: [number, number]): number {
      return Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2);
  }

};