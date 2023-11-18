function getSum(a, b) {
  return b + a;
}

function getSmallestNumber(a, b) {
  return Math.min(a, b);
}

function castBoolean(value) {
  return Boolean(value);
}

function capitalize(str, num) {
  if (num < 0 || num >= str.length) {
    return str;
  }
  return str.slice(0, num) + str.charAt(num).toUpperCase() + str.slice(num + 1);
}

function countCapitalLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      count += 1;
    }
  }
  return count;
}

export {
  getSum,
  getSmallestNumber,
  castBoolean,
  capitalize,
  countCapitalLetters,
};
