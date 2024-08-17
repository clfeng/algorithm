function maxArea(height: number[]): number {
    let i =0, j = height.length -1;
    let max = -Infinity;
    while (i < j) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
      if (height[i] < height[j]) {
        i++;
      } else {
        j--;
      }
    }
    return max;
};