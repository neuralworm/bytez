"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var bytez;
(function (bytez_1) {
    // appendations
    bytez_1.appendationFactor = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
    bytez_1.bitsOrKibibits = ["", "i"];
    bytez_1.bytesOrBits = ["B", "bit"];
    bytez_1.defaultOptions = {
        bits: false,
        base2: false,
        precision: 1,
        roundOffInt: true,
    };
    function bytez(bytes, optionsObject) {
        // set base options
        var options = __assign(__assign({}, bytez_1.defaultOptions), optionsObject);
        // set number and check type
        var number = bytes;
        if (typeof number == "string") {
            // @ts-ignore
            number.length > 0 ? (number = parseFloat(bytes)) : (number = 0);
        }
        else if (!Number.isFinite(number))
            throw new TypeError("Number must be of type Number or String, received " + typeof number);
        var negative = number >= 0 ? false : true;
        number = !options.bits ? Math.abs(number) : Math.abs(number) * 8;
        var factor = number ? (!options.kibibytes ? Math.floor(Math.log10(number) / 3) : Math.floor(Math.log(number) / Math.log(1024))) : 0;
        var divisor = options.kibibytes ? Math.pow(2, 10 * factor) : Math.pow(10, factor * 3);
        number = (number / divisor).toFixed(options.precision);
        // determine if should leave digit on
        if (options.roundOffInt && Number.isInteger(parseFloat(number)))
            number = number.split(".")[0];
        // return final product
        return "" + (negative ? "-" : "") + number + returnAppendation(factor, options.bits, options.kibibytes);
        function returnAppendation(factor, bits, kibi) {
            if (bits === void 0) { bits = false; }
            if (kibi === void 0) { kibi = false; }
            return (bytez_1.appendationFactor[factor] +
                bytez_1.bitsOrKibibits[kibi ? 1 : 0] +
                bytez_1.bytesOrBits[bits ? 1 : 0]);
        }
    }
    bytez_1.bytez = bytez;
    module.exports = bytez;
})(bytez || (bytez = {}));
