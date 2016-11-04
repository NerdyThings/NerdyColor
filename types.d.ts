/// <reference path="./lib/types.d.ts" />
/// <reference path="./nerdy-color-alpha.ts" />

declare interface ArbitraryFunction { (...args: any[]): any }

declare interface ObserverFunction { (payload: any, topic?: string): void }
declare type ObserverArray = ObserverFunction[];

declare type ParsableValue = string | number | undefined;
declare type ParsedValue = number | undefined;

declare interface ColorConstructorParameters {
    r?: number,g?: number, b?: number, alpha?: number, components?: number[], componentNames?: string[],
}