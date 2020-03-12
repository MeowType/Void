const Void = Symbol('void');
function isVoid(v) {
    return v === Void;
}
function isVoidNonStrict(v) {
    return v === Void || v == null;
}

export { Void, isVoid, isVoidNonStrict };
