/// <reference path="types.d.ts" />
export declare class Oberservables {
    static observersOf(obj: any): ObserverArray;
}
export declare const OBSERVERS: symbol;
export declare function isString(obj: any): obj is string;
export declare function isNumber(obj: any): obj is number;
export declare function isFunction(obj: any): obj is ArbitraryFunction;
export declare function isArray(obj: any): obj is [];
export declare const observersOf: typeof Oberservables.observersOf;
export declare namespace Parse {
    function rgbInteger(value: ParsableValue): ParsedValue;
    function rgbScalar(value: ParsableValue): ParsedValue;
    function rgb(value: ParsableValue): ParsedValue;
}
export declare class ObservableObject {
    constructor(...observers: ObserverArray);
    subscribe(...observers: ObserverArray): void;
    unsubscribe(...observers: ObserverArray): void;
    publish(payload: any, topic?: string): void;
}
