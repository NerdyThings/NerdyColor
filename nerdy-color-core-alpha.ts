/// <reference path="types.d.ts" />
import { enumerable, configurable, writable } from './lib/decorators';

export class Oberservables {
    static observersOf(obj: any): ObserverArray { return (<any>obj)[OBSERVERS]; }
}

export const OBSERVERS: symbol = Symbol.for('Observers');
// export interface ArbitraryFunction { (...args: any[]): any }
// export interface ObserverFunction { (payload: any, topic?: string): void }
// export type ObserverArray = ObserverFunction[];
// declare interface Observers { [OBSERVERS]?: ObserverArray; }
export function isString(obj: any): obj is string { return typeof obj == 'string'; }
export function isNumber(obj: any): obj is number { return typeof obj == 'number'; }
export function isFunction(obj: any): obj is ArbitraryFunction { return typeof obj == 'function'; }
export function isArray(obj: any): obj is [] { return Array.isArray(obj); }
export const observersOf = Oberservables.observersOf;

// export declare type ParsableValue = string | number | undefined;
// export declare type ParsedValue = number | undefined;

export namespace Parse {
    /**
     * NumberTests are short, usually single-liner, in-browser console tests.
     */
    const NumberTests = `
        parseTable: generate console.table with value, type, parseInt and parseFloat for value
            console.table([" 0 ", " 1 ", ".1", "0.1", "1.1", "255b", "300"].reduce((table, v) => table.push({ Value: v, Type: typeof v, Integer: parseInt(v), Float: parseFloat(v) }) && table, []));
    `

    export function rgbInteger(value: ParsableValue): ParsedValue {
        if (isString(value)) value = (/^\s*[12]?\d{1,2}(?![\.])/).test(value) ? parseInt(value) : NaN;
        return (isNumber(value) && value >= 0 && value <= 255) ? value : NaN;
    }

    export function rgbScalar(value: ParsableValue): ParsedValue {
        if (isString(value)) value = (/^\s*([10]?\.\d+|[10])(?![\.])/).test(value.trim()) ? parseFloat(value) : NaN;
        return (isNumber(value) && value >= 0 && value <= 1) ? value : NaN;
    }

    export function rgb(value: ParsableValue): ParsedValue {
        const stringMode = isString(value), numberMode = isNumber(value);
        const integer = (<number>rgbInteger(value)), scalar = ((stringMode && (/\./).test(<string>value)) || numberMode) ? (<number>rgbScalar(value)) : NaN;
        const validInteger = !isNaN(integer), validScalar = !isNaN(scalar);
        return (validInteger || validScalar) ? Number(integer || scalar || 0) : (integer === scalar) ? integer : (validScalar) ? scalar : NaN;
    }
}

export class ObservableObject {

    constructor(...observers: ObserverArray) {
        observers = isArray(observers) ? observers.filter(observer => isFunction(observer)) : []; // (<any>this)[OBSERVERS] = (<ObserverArray>[]);
        Object.defineProperty(this, OBSERVERS, { get: () => { return observers; }, enumerable: false, configurable: false }); // value: (<ObserverArray>[]),
    }

    @enumerable.off @configurable.off @writable.off
    subscribe(...observers: ObserverArray) {
        const observerList = observersOf(this);
        for (let observer of observers) {
            if (isFunction(observer) && observerList.indexOf(observer) == -1) observerList.push(observer);
        }
    }

    @enumerable.off @configurable.off @writable.off
    unsubscribe(...observers: ObserverArray) {
        const observerList = observersOf(this);
        let index = -1;
        for (let observer of observers) {
            if ((index = observerList.indexOf(observer)) > -1) observerList.splice(index, 1);
        }
    }

    @enumerable.off @configurable.off @writable.off
    publish(payload: any, topic?: string) {
        for (let observer of observersOf(this)) {
            try {
                observer(payload, topic);
            } catch (exception) {
                console.error('Publish error for %s by %O with payload %O when calling %O.\n\t', topic, this, payload, observer, exception);
            }
        }
    }
}
