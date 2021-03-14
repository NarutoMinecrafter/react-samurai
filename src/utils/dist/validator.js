"use strict";
exports.__esModule = true;
exports.maxLengthcreator = exports.required = void 0;
exports.required = function (value) {
    if (value)
        return undefined;
    return 'this field required';
};
exports.maxLengthcreator = function (maxLength) { return function (value) {
    if (value && value.length > maxLength)
        return "max length is " + maxLength + " characters";
    return undefined;
}; };
