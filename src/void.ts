export const Void: void = Symbol('void') as any
export function isVoid(v: any): v is void {
    return v === Void
}
export function isVoidNonStrict(v: any): v is void {
    return v === Void || v == null
}