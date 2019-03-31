(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.void = {}));
}(this, function (exports) { 'use strict';

	const Void = Symbol('void');

	exports.Void = Void;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
