const sum = (limit) => {
  let i = 0,
  res = 0

  while(i < limit) {
    i += 1;
    res += i;
  }

  return res
}

console.log('- result -', sum(13))

module.exports = sum