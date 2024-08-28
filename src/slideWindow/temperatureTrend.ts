function temperatureTrend(temperatureA: number[], temperatureB: number[]): number {
  let i = 1;
  let j = 1;
  let max = 0;
  while (i < temperatureA.length) {
    if (getChange(temperatureA, i) === getChange(temperatureB, i)) {
      j = i;
      while (j < temperatureA.length && getChange(temperatureA, j) === getChange(temperatureB, j)) {
        j++;
      }
      max = Math.max(max, j - i);
      i = j + 1;
    } else {
      i++;
    }
  }

  return max;

  function getChange (temperature: number[], i: number) {
    if (temperature[i] > temperature[i - 1]) {
      return 1;
    } else if (temperature[i] === temperature[i - 1]) {
      return 0;
    } else {
      return -1;
    }
  }
};

console.log(temperatureTrend([21,18,18,18,31], [34,32,16,16,17]))