/// <reference path="types.d.ts" />
// Source: https://www.typescriptlang.org/docs/handbook/decorators.html
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports"], function (require, exports) {
    "use strict";
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
    function sealed(constructor) { Object.seal(constructor), Object.seal(constructor.prototype); }
    exports.sealed = sealed;
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
    exports.enumerable = Object.assign((value = true) => (target, propertyKey, descriptor) => { descriptor.enumerable = value; }, {
        on: () => exports.enumerable(true),
        off: () => exports.enumerable(false),
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
    exports.configurable = Object.assign((value = true) => (target, propertyKey, descriptor) => { descriptor.configurable = value; }, {
        on: () => exports.configurable(true),
        off: () => exports.configurable(false),
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
    exports.writable = Object.assign((value = true) => (target, propertyKey, descriptor) => { descriptor.writable = value; }, {
        on: () => exports.writable(true),
        off: () => exports.writable(false),
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9kZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUNuQyx1RUFBdUU7Ozs7Ozs7Ozs7SUFFdkU7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtCRztJQUNILGdCQUF1QixXQUFxQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQS9HLHdCQUErRztJQUUvRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FvQkc7SUFDUSxRQUFBLFVBQVUsR0FBb0IsTUFBTSxDQUFDLE1BQU0sQ0FDbEQsQ0FBQyxRQUFpQixJQUFJLEtBQWdCLENBQUMsTUFBVyxFQUFFLFdBQW1CLEVBQUUsVUFBOEIsT0FBTyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNoSixFQUFFLEVBQUUsTUFBTSxrQkFBVSxDQUFDLElBQUksQ0FBQztRQUMxQixHQUFHLEVBQUUsTUFBTSxrQkFBVSxDQUFDLEtBQUssQ0FBQztLQUMvQixDQUFDLENBQUM7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FvQkc7SUFDUSxRQUFBLFlBQVksR0FBb0IsTUFBTSxDQUFDLE1BQU0sQ0FDcEQsQ0FBQyxRQUFpQixJQUFJLEtBQWdCLENBQUMsTUFBVyxFQUFFLFdBQW1CLEVBQUUsVUFBOEIsT0FBTyxVQUFVLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNsSixFQUFFLEVBQUUsTUFBTSxvQkFBWSxDQUFDLElBQUksQ0FBQztRQUM1QixHQUFHLEVBQUUsTUFBTSxvQkFBWSxDQUFDLEtBQUssQ0FBQztLQUNqQyxDQUFDLENBQUM7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FvQkc7SUFDUSxRQUFBLFFBQVEsR0FBb0IsTUFBTSxDQUFDLE1BQU0sQ0FDaEQsQ0FBQyxRQUFpQixJQUFJLEtBQWdCLENBQUMsTUFBVyxFQUFFLFdBQW1CLEVBQUUsVUFBOEIsT0FBTyxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM5SSxFQUFFLEVBQUUsTUFBTSxnQkFBUSxDQUFDLElBQUksQ0FBQztRQUN4QixHQUFHLEVBQUUsTUFBTSxnQkFBUSxDQUFDLEtBQUssQ0FBQztLQUM3QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwZXMuZC50c1wiIC8+XG4vLyBTb3VyY2U6IGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL2RlY29yYXRvcnMuaHRtbFxuXG4vKipcbiAqIEBzZWFsZWQgY2xhc3MgZGVjb3JhdG9yXG4gKiBcbiAqIFdoZW4gQHNlYWxlZCBpcyBleGVjdXRlZCwgaXQgd2lsbCBzZWFsIGJvdGggdGhlIGNvbnN0cnVjdG9yIGFuZCBpdHMgcHJvdG90eXBlLlxuICogXG4gKiBFeGFtcGxlOlxuICogICAgICBAc2VhbGVkXG4gKiAgICAgIGNsYXNzIEdyZWV0ZXIge1xuICogICAgICAgICAgZ3JlZXRpbmc6IHN0cmluZztcbiAqICAgICAgICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICogICAgICAgICAgICAgIHRoaXMuZ3JlZXRpbmcgPSBtZXNzYWdlO1xuICogICAgICAgICAgfVxuICogICAgICAgICAgZ3JlZXQoKSB7XG4gKiAgICAgICAgICAgICAgcmV0dXJuIFwiSGVsbG8sIFwiICsgdGhpcy5ncmVldGluZztcbiAqICAgICAgICAgIH1cbiAqICAgICAgfVxuICogXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VhbGVkKGNvbnN0cnVjdG9yOiBGdW5jdGlvbikgeyBPYmplY3Quc2VhbChjb25zdHJ1Y3RvciksIE9iamVjdC5zZWFsKGNvbnN0cnVjdG9yLnByb3RvdHlwZSk7IH1cblxuLyoqXG4gKiBAZW51bWVyYWJsZS5bb258b2ZmXSBtZXRob2QgZGVjb3JhdG9yXG4gKiBcbiAqIFdoZW4gdGhlIEBlbnVtZXJhYmxlKGZhbHNlKSBkZWNvcmF0b3IgaXMgY2FsbGVkLCBpdCBtb2RpZmllcyB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBvZiB0aGUgcHJvcGVydHkgZGVzY3JpcHRvci5cbiAqIFxuICogRXhhbXBsZTpcbiAqICAgICAgY2xhc3MgR3JlZXRlciB7XG4gKiAgICAgICAgICBncmVldGluZzogc3RyaW5nO1xuICogICAgICAgICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gKiAgICAgICAgICAgICAgdGhpcy5ncmVldGluZyA9IG1lc3NhZ2U7XG4gKiAgICAgICAgICB9XG4gKiAgICAgIFxuICogICAgICAgICAgQGVudW1lcmFibGUoZmFsc2UpXG4gKiAgICAgICAgICBncmVldCgpIHtcbiAqICAgICAgICAgICAgICByZXR1cm4gXCJIZWxsbywgXCIgKyB0aGlzLmdyZWV0aW5nO1xuICogICAgICAgICAgfVxuICogICAgICB9XG4gKiBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ZhbHVlPXRydWVdXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgdmFyIGVudW1lcmFibGU6Qm9vbGVhbkRlY29yYXRvciA9IE9iamVjdC5hc3NpZ24oXG4gICAgKHZhbHVlOiBib29sZWFuID0gdHJ1ZSkgOiBGdW5jdGlvbiA9PiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4geyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSB2YWx1ZTsgfSwge1xuICAgIG9uOiAoKSA9PiBlbnVtZXJhYmxlKHRydWUpLFxuICAgIG9mZjogKCkgPT4gZW51bWVyYWJsZShmYWxzZSksXG59KTtcblxuLyoqXG4gKiBAY29uZmlndXJhYmxlLltvbnxvZmZdIG1ldGhvZCBkZWNvcmF0b3JcbiAqIFxuICogV2hlbiB0aGUgQGNvbmZpZ3VyYWJsZShmYWxzZSkgZGVjb3JhdG9yIGlzIGNhbGxlZCwgaXQgbW9kaWZpZXMgdGhlIGNvbmZpZ3VyYWJsZSBwcm9wZXJ0eSBvZiB0aGUgcHJvcGVydHkgZGVzY3JpcHRvci5cbiAqIFxuICogRXhhbXBsZTpcbiAqICAgICAgY2xhc3MgR3JlZXRlciB7XG4gKiAgICAgICAgICBncmVldGluZzogc3RyaW5nO1xuICogICAgICAgICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gKiAgICAgICAgICAgICAgdGhpcy5ncmVldGluZyA9IG1lc3NhZ2U7XG4gKiAgICAgICAgICB9XG4gKiAgICAgIFxuICogICAgICAgICAgQGNvbmZpZ3VyYWJsZShmYWxzZSlcbiAqICAgICAgICAgIGdyZWV0KCkge1xuICogICAgICAgICAgICAgIHJldHVybiBcIkhlbGxvLCBcIiArIHRoaXMuZ3JlZXRpbmc7XG4gKiAgICAgICAgICB9XG4gKiAgICAgIH1cbiAqIFxuICogQHBhcmFtIHtib29sZWFufSBbdmFsdWU9dHJ1ZV1cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCB2YXIgY29uZmlndXJhYmxlOkJvb2xlYW5EZWNvcmF0b3IgPSBPYmplY3QuYXNzaWduKFxuICAgICh2YWx1ZTogYm9vbGVhbiA9IHRydWUpIDogRnVuY3Rpb24gPT4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB2YWx1ZTsgfSwge1xuICAgIG9uOiAoKSA9PiBjb25maWd1cmFibGUodHJ1ZSksXG4gICAgb2ZmOiAoKSA9PiBjb25maWd1cmFibGUoZmFsc2UpLFxufSk7XG5cbi8qKlxuICogQHdyaXRhYmxlLltvbnxvZmZdIG1ldGhvZCBkZWNvcmF0b3JcbiAqIFxuICogV2hlbiB0aGUgQHdyaXRhYmxlKGZhbHNlKSBkZWNvcmF0b3IgaXMgY2FsbGVkLCBpdCBtb2RpZmllcyB0aGUgd3JpdGFibGUgcHJvcGVydHkgb2YgdGhlIHByb3BlcnR5IGRlc2NyaXB0b3IuXG4gKiBcbiAqIEV4YW1wbGU6XG4gKiAgICAgIGNsYXNzIEdyZWV0ZXIge1xuICogICAgICAgICAgZ3JlZXRpbmc6IHN0cmluZztcbiAqICAgICAgICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICogICAgICAgICAgICAgIHRoaXMuZ3JlZXRpbmcgPSBtZXNzYWdlO1xuICogICAgICAgICAgfVxuICogICAgICBcbiAqICAgICAgICAgIEB3cml0YWJsZShmYWxzZSlcbiAqICAgICAgICAgIGdyZWV0KCkge1xuICogICAgICAgICAgICAgIHJldHVybiBcIkhlbGxvLCBcIiArIHRoaXMuZ3JlZXRpbmc7XG4gKiAgICAgICAgICB9XG4gKiAgICAgIH1cbiAqIFxuICogQHBhcmFtIHtib29sZWFufSBbdmFsdWU9dHJ1ZV1cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCB2YXIgd3JpdGFibGU6Qm9vbGVhbkRlY29yYXRvciA9IE9iamVjdC5hc3NpZ24oXG4gICAgKHZhbHVlOiBib29sZWFuID0gdHJ1ZSkgOiBGdW5jdGlvbiA9PiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4geyBkZXNjcmlwdG9yLndyaXRhYmxlID0gdmFsdWU7IH0sIHtcbiAgICBvbjogKCkgPT4gd3JpdGFibGUodHJ1ZSksXG4gICAgb2ZmOiAoKSA9PiB3cml0YWJsZShmYWxzZSksXG59KTsiXX0=