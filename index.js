// appendations
const appendationFactor = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"]
const bitsOrKibibits = ["", "i"]
const bytesOrBits = ["B", "bit"]

function returnAppendation(factor, bits = false, kibi = false) {
  return (
    appendationFactor[factor] +
    bitsOrKibibits[kibi ? 1 : 0] +
    bytesOrBits[bits ? 1 : 0]
  )
}

module.exports = function (byteString, optionsObject) {
  // set base options
  const options = { ...defaultOptions, ...optionsObject }
  // set number and check type
  let number = byteString
  if (typeof number == "string") {
    // handle empty string while converting to number type
    number.length > 0 ? (number = parseFloat(byteString)) : 0
  } else if (!Number.isFinite(number))
    throw new TypeError(
      "Number must be of type Number or String, received " + typeof number
    )
  // find correct divisor
  let appendation = ""

  // get correct factor to determine appendation from array (divide by 3 for each 1k places)
  let factor = number ? Math.floor(Math.log10(number) / 3) : 0
  console.log(factor + " factor from number " + number)

  divisor = Math.pow(10, factor * 3)
  appendation = returnAppendation(factor)

  // conver with correct divisor, convert to string, and round it to nearest n(precision) digits.
  number = (number / divisor).toFixed(options.precision)
  // determine if should leave digit on
  if (options.roundOffInt && Number.isInteger(parseFloat(number)))
    number = number.split(".")[0]

  return `${number}${appendation}`
}
const defaultOptions = {
  bits: false,
  kibibytes: false,
  precision: 1,
  roundOffInt: true,
}
