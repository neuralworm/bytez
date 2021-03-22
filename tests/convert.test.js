/* eslint-disable */
const convert = require("../index")

test("convert 1000 bytes NUMBER to readable string", () => {
  expect(
    convert(1000, {
      roundOffInt: true,
    })
  ).toBe("1KB")
}) 
test("convert 100 bytes NUMBER to readable string", () => {
  expect(convert(100)).toBe("100B")
})
test("convert 10001 bytes NUMBER to readable string", () => {
  expect(convert(10001)).toBe("10KB")
})
test("convert 100341431 bytes NUMBER to readable string", () => {
  expect(convert(100341431)).toBe("100.3MB")
})
test("convert 100341431 bytes NUMBER w/ BITS to readable string", () => {
  expect(convert(100341431,{
    bits: true
  })).toBe("802.7Mbit")
})
test("convert 10001 bytes STRING to readable string", () => {
  expect(convert("10001")).toBe("10KB")
})
test("convert 1320000 bytes NUMBER to readable string", () => {
  expect(convert(1320000)).toBe("1.3MB")
})
test("convert 1320000 bytes STRING to readable string", () => {
  expect(convert("1320000")).toBe("1.3MB")
})
test('convert ""  STRING to readable string', () => {
  expect(convert("")).toBe("0B")
})
test('convert "0.8.9.0"  STRING to readable string', () => {
  expect(convert("0B")).toBe("0B")
})
test("convert 340918350984  NUMBER to readable string", () => {
  expect(convert(340918350984)).toBe("340.9GB")
})
test("convert 12309823123123  NUMBER to readable string", () => {
  expect(convert(12309823123123)).toBe("12.3TB")
})
test("convert 421230982312312344  NUMBER to readable string", () => {
  expect(convert(421230982312312344)).toBe("421.2PB")
})
test("handle inserted OBJECT with error", () => {
  expect(() => convert({ number: 5 })).toThrow()
})
test("handle null passed in", () => {
    expect(() => convert(null)).toThrow()

})
test("handle undefined passed in", () => {
    expect(() => convert(undefined)).toThrow()

})
test("handle boolean passed in", () => {
    expect(() => convert(true)).toThrow()

})
test("handle infinity passed in", () => {
    expect(() => convert(Infinity)).toThrow()

})
test("Handle negative string number", ()=>{
    expect(convert('-12')).toBe('-12B')
})
test("Negative number pass in", ()=>{
    expect(convert(-12)).toBe("-12B")
})
test("Test kibibytes option", ()=>{
  expect(convert(1024, {
    kibibytes: true
  })).toBe("1KiB")
})
test("Test kibibytes", ()=>{
  expect(convert(500000000000, {
    kibibytes: true
  })).toBe("465.7GiB")
})
test("Convert 500GB as BYTES into GIGABITS", ()=>{ // base 10
  expect(convert(500000000000, {
    bits: true
  })).toBe("4Tbit")
})

test("Convert 500GB as BYTES into GIBIBITS", ()=>{ // base 2
  expect(convert(500000000000, {
    bits: true,
    kibibytes: true
  })).toBe("3.6Tibit")
})
test("Convert with precision option 3", ()=>{
  expect(convert(398274532, {
    precision: 3
  })).toBe("398.275MB")
})

test("Convert with precision option 10", ()=>{
  expect(convert(398274532, {
    precision: 10
  })).toBe("398.2745320000MB")
})