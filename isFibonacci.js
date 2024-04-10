const isFibonacci = (n) => {
  n = +n

  let x = 0,
  y = 1

  while(y < n) [x, y] = [y, x + y];

  const res = n === 0 || y === n

  return res
}

console.log('- result -', isFibonacci(process.argv.slice(2))) 

module.exports = isFibonacci