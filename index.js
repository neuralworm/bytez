module.exports = function (byteString, optionsObject) {
  // set base options
  const options = { ...defaultOptions, ...optionsObject }

  // set number and check type
  let number = byteString
  if (typeof number !== "number") {
    number = parseFloat(byteString)
    console.log('type was string')
  }

  // find correct divisor
  let divisor = 1
  let appendation = ""
  if(number < Math.pow(10, 3)){
      divisor = 1
      appendation = "B"
  }
  else if(number < Math.pow(10, 6)){
    divisor = Math.pow(10,3)
    appendation = "kB"
}
else if(number < Math.pow(10,9)){
    divisor = Math.pow(10,6)
    appendation = 'mB'
}
else if(number < Math.pow(10,12)){
    divisor = Math.pow(10,9)
    appendation = 'gB'
}
else if(number < Math.pow(10,15)){
    divisor = Math.pow(10,12)
    appendation = 'tB'
}


  // conver with correct divisor, convert to string, and round it to nearest n(precision) digits.
  number = (number / divisor).toFixed(options.precision)
    console.log(number)
  // determine if should leave digit on
    if(options.roundOffInt && Number.isInteger(parseFloat(number))) number = number.split('.')[0]

  return `${number}${appendation}`
}

const defaultOptions = {
  casing: "camelCase",
  bits: false,
  kibibytes: false,
  precision: 1,
  roundOffInt: true
}
