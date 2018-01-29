const COUNT_ABBRS = [ '', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y' ]
export const formatCount = (count, withAbbr = false, decimals = 3) => {
  const i= 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
  let result  = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
  if(withAbbr) {
      result += `${COUNT_ABBRS[i]}`;
  }
  return result;
}
