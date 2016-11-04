/// <reference path="../../lib/types.d.ts" />
/// <reference path="../../types.d.ts" />
declare module "lib/decorators" {
    /**
     * @sealed class decorator
     *
     * When @sealed is executed, it will seal both the constructor and its prototype.
     *
     * Example:
     *      @sealed
     *      class Greeter {
     *          greeting: string;
     *          constructor(message: string) {
     *              this.greeting = message;
     *          }
     *          greet() {
     *              return "Hello, " + this.greeting;
     *          }
     *      }
     *
     * @param {Function} constructor
     */
    export function sealed(constructor: Function): void;
    /**
     * @enumerable.[on|off] method decorator
     *
     * When the @enumerable(false) decorator is called, it modifies the enumerable property of the property descriptor.
     *
     * Example:
     *      class Greeter {
     *          greeting: string;
     *          constructor(message: string) {
     *              this.greeting = message;
     *          }
     *
     *          @enumerable(false)
     *          greet() {
     *              return "Hello, " + this.greeting;
     *          }
     *      }
     *
     * @param {boolean} [value=true]
     * @returns
     */
    export var enumerable: BooleanDecorator;
    /**
     * @configurable.[on|off] method decorator
     *
     * When the @configurable(false) decorator is called, it modifies the configurable property of the property descriptor.
     *
     * Example:
     *      class Greeter {
     *          greeting: string;
     *          constructor(message: string) {
     *              this.greeting = message;
     *          }
     *
     *          @configurable(false)
     *          greet() {
     *              return "Hello, " + this.greeting;
     *          }
     *      }
     *
     * @param {boolean} [value=true]
     * @returns
     */
    export var configurable: BooleanDecorator;
    /**
     * @writable.[on|off] method decorator
     *
     * When the @writable(false) decorator is called, it modifies the writable property of the property descriptor.
     *
     * Example:
     *      class Greeter {
     *          greeting: string;
     *          constructor(message: string) {
     *              this.greeting = message;
     *          }
     *
     *          @writable(false)
     *          greet() {
     *              return "Hello, " + this.greeting;
     *          }
     *      }
     *
     * @param {boolean} [value=true]
     * @returns
     */
    export var writable: BooleanDecorator;
}
declare module "nerdy-color-core-alpha" {
    export class Oberservables {
        static observersOf(obj: any): ObserverArray;
    }
    export const OBSERVERS: symbol;
    export function isString(obj: any): obj is string;
    export function isNumber(obj: any): obj is number;
    export function isFunction(obj: any): obj is ArbitraryFunction;
    export function isArray(obj: any): obj is [];
    export const observersOf: typeof Oberservables.observersOf;
    export namespace Parse {
        function rgbInteger(value: ParsableValue): ParsedValue;
        function rgbScalar(value: ParsableValue): ParsedValue;
        function rgb(value: ParsableValue): ParsedValue;
    }
    export class ObservableObject {
        constructor(...observers: ObserverArray);
        subscribe(...observers: ObserverArray): void;
        unsubscribe(...observers: ObserverArray): void;
        publish(payload: any, topic?: string): void;
    }
}
declare module "nerdy-color-alpha" {
    import { ObservableObject, Parse, Oberservables } from "nerdy-color-core-alpha";
    export module NerdyColor {
        class Utils {
            static Parse: typeof Parse;
            static ObservableObject: typeof ObservableObject;
            static observersOf: typeof Oberservables.observersOf;
        }
        class Color extends ObservableObject {
            components: ParsedValue[];
            componentNames: string[];
            alpha: number;
            mode: string;
            constructor(colorSpecification?: ColorConstructorParameters | string | undefined);
            getComponent(id: string | number): ParsedValue;
            getComponents(): ParsedValue[];
            setComponents({r, g, b}: {
                r: ParsableValue;
                g: ParsableValue;
                b: ParsableValue;
            }): boolean;
        }
    }
    export type NerdyColorModule = {
        Color: new (colorSpecification?: ColorConstructorParameters | string | undefined) => NerdyColor.Color;
        Utils: NerdyColor.Utils;
    };
    export type NerdyColorExports = {
        default: NerdyColorModule;
    };
}
declare module "NerdyColor" {
    export * from "nerdy-color-alpha";
}
