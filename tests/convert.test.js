const convert = require('../index')

test('convert 1000 bytes NUMBER to readable string', () => {
    expect(convert(1000, {
        roundOffInt: true
    })).toBe("1kB")
})
test('convert 100 bytes NUMBER to readable string', () => {
    expect(convert(100)).toBe("100B")
})
test('convert 10001 bytes NUMBER to readable string', () => {
    expect(convert(10001)).toBe("10kB")
})
test('convert 10001 bytes STRING to readable string', () => {
    expect(convert('10001')).toBe("10kB")
})
test('convert 1320000 bytes NUMBER to readable string', () => {
    expect(convert(1320000)).toBe("1.3mB")
})
test('convert 1320000 bytes STRING to readable string', () => {
    expect(convert('1320000')).toBe("1.3mB")
})
