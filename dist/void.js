(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.void = {}));
}(this, (function (exports) { 'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
