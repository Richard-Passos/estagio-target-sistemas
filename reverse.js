const reverse = (str = '') => {
  const { length } = str;

  let res = ''

  for(let i = 0; i < length; i++) res += str[length - 1 - i]

  return res
}

console.log('- result -', reverse(...process.argv.slice(2))) 

module.exports = reverse