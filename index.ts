/**
 * 
 * @param {string} string 
 * @param {number} number 
 * @returns {string}
 */
module.exports = (bytes: number | string, optionsObject: any): string => {
  // set base options
  const options = { ...defaultOptions, ...optionsObject }
  // set number and check type
  let number = bytes
  if (typeof number == "string") {
    // @ts-ignore
    number.length > 0 ? (number = parseFloat(bytes)) : (number = 0)
  } else if (!Number.isFinite(number))
    throw new TypeError(
      "Number must be of type Number or String, received " + typeof number
    )
      
  let negative = number >= 0 ? false : true
  number = !options.bits ? Math.abs(number) : Math.abs(number) * 8
  let factor = number ? (!options.kibibytes ? Math.floor(Math.log10(number) / 3) : Math.floor(Math.log(number) / Math.log(1024))) : 0
  let divisor = options.kibibytes ? Math.pow(2, 10 * factor) : Math.pow(10, factor * 3)

  number = (number / divisor).toFixed(options.precision)
  // determine if should leave digit on
  if (options.roundOffInt && Number.isInteger(parseFloat(number)))
    number = number.split(".")[0]

  // return final product
  return `${negative ? "-" : ""}${number}${returnAppendation(factor, options.bits, options.kibibytes)}`

  function returnAppendation(factor: number, bits = false, kibi = false) {
    return (
      appendationFactor[factor] +
      bitsOrKibibits[kibi ? 1 : 0] +
      bytesOrBits[bits ? 1 : 0]
    )
  }
}
// appendations
const appendationFactor: string[] = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"]
const bitsOrKibibits: string[] = ["", "i"]
const bytesOrBits: string[] = ["B", "bit"]
const defaultOptions = {
  bits: false,
  base2: false,
  precision: 1,
  roundOffInt: true,
}



