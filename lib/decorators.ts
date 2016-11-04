/// <reference path="types.d.ts" />
// Source: https://www.typescriptlang.org/docs/handbook/decorators.html

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
export function sealed(constructor: Function) { Object.seal(constructor), Object.seal(constructor.prototype); }

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
export var enumerable:BooleanDecorator = Object.assign(
    (value: boolean = true) : Function => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => { descriptor.enumerable = value; }, {
    on: () => enumerable(true),
    off: () => enumerable(false),
});

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
export var configurable:BooleanDecorator = Object.assign(
    (value: boolean = true) : Function => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => { descriptor.configurable = value; }, {
    on: () => configurable(true),
    off: () => configurable(false),
});

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
export var writable:BooleanDecorator = Object.assign(
    (value: boolean = true) : Function => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => { descriptor.writable = value; }, {
    on: () => writable(true),
    off: () => writable(false),
});