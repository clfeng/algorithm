/*

d[i]: i天结束时的最大收益
dp[i][0]: 持股状态，
dp[i][1]: 不可操作状态
dp[i][2]: 未持股状态


延续 或者 未持股+买入 => 持股
持股 + 卖出 => 不可操作
延续 或者 不可操作转入 => 未持股

dp[i][0] = max(dp[i - 1][0], dp[i - 1][2] - prices[i])
dp[i][1] = dp[i - 1][0] + pirces[i]
dp[i][2] = max(dp[i - 1][2], dp[i - 1][1])
*/

function maxProfit(prices: number[]): number {
  if (!prices.length) {
    return 0
  }

  const n = prices.length;
  const dp = Array.from({length: n}, () => new Array(3).fill(0));

  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = 0;

  for(let i = 1; i < n ; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i - 1][0] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1]);
  }

  return Math.max(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
};