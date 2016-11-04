/// <reference path="types.d.ts" />
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
export declare function sealed(constructor: Function): void;
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
export declare var enumerable: BooleanDecorator;
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
export declare var configurable: BooleanDecorator;
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
export declare var writable: BooleanDecorator;
