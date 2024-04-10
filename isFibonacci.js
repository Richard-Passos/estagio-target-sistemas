const isFibonacci = (n) => {
  n = +n

  let x = 0,
  y = 1

  while(y < n) [x, y] = [y, x + y];

  return n === 0 || y === n
}

console.log('- result -', isFibonacci(...process.argv.slice(2))) 

module.exports = isFibonacci