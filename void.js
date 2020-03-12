'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const Void = Symbol('void');
function isVoid(v) {
    return v === Void;
}
function isVoidNonStrict(v) {
    return v === Void || v == null;
}

exports.Void = Void;
exports.isVoid = isVoid;
exports.isVoidNonStrict = isVoidNonStrict;
