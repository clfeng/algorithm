function restoreIpAddresses(s: string): string[] {
  // ipSegements 为 已经选择的字符串
  // s 为剩余可以选的字符串
  const ret: string[] = [];
  getIpAddr([], s);
  function getIpAddr (ipSegements: string[], s: string) {
    if (ipSegements.length === 4 && !s.length) {
      // 合法的ip
      ret.push(ipSegements.join('.'));
      return;
    }

    // 已经可以判断是无效的ip
    if (ipSegements.length > 3 && s.length) {
      return;
    }

    for(let i = 0; i < 3 && i < s.length; i++) {
      const ipNum = s.slice(0, i + 1);
      if (ipNum.startsWith('0') && ipNum.length !== 1) {
        continue;
      }
      if (Number(ipNum) <= 255) {
        getIpAddr([...ipSegements, ipNum], s.slice(i + 1));
      }
    }
  } 

  return ret;
};


console.log(restoreIpAddresses("25525511135"));