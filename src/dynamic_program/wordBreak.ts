function wordBreak(s: string, wordDict: string[]): boolean {
  /*
    dp[i]: s.slice(0, i)的字符串能否通过wordDict中的单词拼出来
    dp[i] = dp[j - 1] && check(s.slice(j, i)); // j 是分割点
    */
    const len = s.length;
    const dp = new Array(len + 1).fill(false);
    const wordSet = new Set(wordDict);
    dp[0] = true;// 表示空字符串
    for(let i = 1; i <= len; i++) {
      for(let j = 0; j <= i; j++) {
        if (dp[j] && wordSet.has(s.slice(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }
    return dp[len];
};

console.log(wordBreak("leetcode", ["leet","code"]))