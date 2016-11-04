/// <reference path="types.d.ts" />
// Source: https://www.typescriptlang.org/docs/handbook/decorators.html
define(["require", "exports"], function (require, exports) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DO0FBQ25DLHVFQUF1RTs7O0lBRXZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkc7SUFDSCxnQkFBdUIsV0FBcUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUEvRixjQUFNLFNBQXlGLENBQUE7SUFFL0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bb0JHO0lBQ1Esa0JBQVUsR0FBb0IsTUFBTSxDQUFDLE1BQU0sQ0FDbEQsQ0FBQyxLQUFLLEdBQVksSUFBSSxLQUFnQixDQUFDLE1BQVcsRUFBRSxXQUFtQixFQUFFLFVBQThCLE9BQU8sVUFBVSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDaEosRUFBRSxFQUFFLE1BQU0sa0JBQVUsQ0FBQyxJQUFJLENBQUM7UUFDMUIsR0FBRyxFQUFFLE1BQU0sa0JBQVUsQ0FBQyxLQUFLLENBQUM7S0FDL0IsQ0FBQyxDQUFDO0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bb0JHO0lBQ1Esb0JBQVksR0FBb0IsTUFBTSxDQUFDLE1BQU0sQ0FDcEQsQ0FBQyxLQUFLLEdBQVksSUFBSSxLQUFnQixDQUFDLE1BQVcsRUFBRSxXQUFtQixFQUFFLFVBQThCLE9BQU8sVUFBVSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDbEosRUFBRSxFQUFFLE1BQU0sb0JBQVksQ0FBQyxJQUFJLENBQUM7UUFDNUIsR0FBRyxFQUFFLE1BQU0sb0JBQVksQ0FBQyxLQUFLLENBQUM7S0FDakMsQ0FBQyxDQUFDO0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bb0JHO0lBQ1EsZ0JBQVEsR0FBb0IsTUFBTSxDQUFDLE1BQU0sQ0FDaEQsQ0FBQyxLQUFLLEdBQVksSUFBSSxLQUFnQixDQUFDLE1BQVcsRUFBRSxXQUFtQixFQUFFLFVBQThCLE9BQU8sVUFBVSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDOUksRUFBRSxFQUFFLE1BQU0sZ0JBQVEsQ0FBQyxJQUFJLENBQUM7UUFDeEIsR0FBRyxFQUFFLE1BQU0sZ0JBQVEsQ0FBQyxLQUFLLENBQUM7S0FDN0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGVzLmQudHNcIiAvPlxuLy8gU291cmNlOiBodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9kZWNvcmF0b3JzLmh0bWxcblxuLyoqXG4gKiBAc2VhbGVkIGNsYXNzIGRlY29yYXRvclxuICogXG4gKiBXaGVuIEBzZWFsZWQgaXMgZXhlY3V0ZWQsIGl0IHdpbGwgc2VhbCBib3RoIHRoZSBjb25zdHJ1Y3RvciBhbmQgaXRzIHByb3RvdHlwZS5cbiAqIFxuICogRXhhbXBsZTpcbiAqICAgICAgQHNlYWxlZFxuICogICAgICBjbGFzcyBHcmVldGVyIHtcbiAqICAgICAgICAgIGdyZWV0aW5nOiBzdHJpbmc7XG4gKiAgICAgICAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAqICAgICAgICAgICAgICB0aGlzLmdyZWV0aW5nID0gbWVzc2FnZTtcbiAqICAgICAgICAgIH1cbiAqICAgICAgICAgIGdyZWV0KCkge1xuICogICAgICAgICAgICAgIHJldHVybiBcIkhlbGxvLCBcIiArIHRoaXMuZ3JlZXRpbmc7XG4gKiAgICAgICAgICB9XG4gKiAgICAgIH1cbiAqIFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlYWxlZChjb25zdHJ1Y3RvcjogRnVuY3Rpb24pIHsgT2JqZWN0LnNlYWwoY29uc3RydWN0b3IpLCBPYmplY3Quc2VhbChjb25zdHJ1Y3Rvci5wcm90b3R5cGUpOyB9XG5cbi8qKlxuICogQGVudW1lcmFibGUuW29ufG9mZl0gbWV0aG9kIGRlY29yYXRvclxuICogXG4gKiBXaGVuIHRoZSBAZW51bWVyYWJsZShmYWxzZSkgZGVjb3JhdG9yIGlzIGNhbGxlZCwgaXQgbW9kaWZpZXMgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgb2YgdGhlIHByb3BlcnR5IGRlc2NyaXB0b3IuXG4gKiBcbiAqIEV4YW1wbGU6XG4gKiAgICAgIGNsYXNzIEdyZWV0ZXIge1xuICogICAgICAgICAgZ3JlZXRpbmc6IHN0cmluZztcbiAqICAgICAgICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICogICAgICAgICAgICAgIHRoaXMuZ3JlZXRpbmcgPSBtZXNzYWdlO1xuICogICAgICAgICAgfVxuICogICAgICBcbiAqICAgICAgICAgIEBlbnVtZXJhYmxlKGZhbHNlKVxuICogICAgICAgICAgZ3JlZXQoKSB7XG4gKiAgICAgICAgICAgICAgcmV0dXJuIFwiSGVsbG8sIFwiICsgdGhpcy5ncmVldGluZztcbiAqICAgICAgICAgIH1cbiAqICAgICAgfVxuICogXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt2YWx1ZT10cnVlXVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IHZhciBlbnVtZXJhYmxlOkJvb2xlYW5EZWNvcmF0b3IgPSBPYmplY3QuYXNzaWduKFxuICAgICh2YWx1ZTogYm9vbGVhbiA9IHRydWUpIDogRnVuY3Rpb24gPT4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdmFsdWU7IH0sIHtcbiAgICBvbjogKCkgPT4gZW51bWVyYWJsZSh0cnVlKSxcbiAgICBvZmY6ICgpID0+IGVudW1lcmFibGUoZmFsc2UpLFxufSk7XG5cbi8qKlxuICogQGNvbmZpZ3VyYWJsZS5bb258b2ZmXSBtZXRob2QgZGVjb3JhdG9yXG4gKiBcbiAqIFdoZW4gdGhlIEBjb25maWd1cmFibGUoZmFsc2UpIGRlY29yYXRvciBpcyBjYWxsZWQsIGl0IG1vZGlmaWVzIHRoZSBjb25maWd1cmFibGUgcHJvcGVydHkgb2YgdGhlIHByb3BlcnR5IGRlc2NyaXB0b3IuXG4gKiBcbiAqIEV4YW1wbGU6XG4gKiAgICAgIGNsYXNzIEdyZWV0ZXIge1xuICogICAgICAgICAgZ3JlZXRpbmc6IHN0cmluZztcbiAqICAgICAgICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICogICAgICAgICAgICAgIHRoaXMuZ3JlZXRpbmcgPSBtZXNzYWdlO1xuICogICAgICAgICAgfVxuICogICAgICBcbiAqICAgICAgICAgIEBjb25maWd1cmFibGUoZmFsc2UpXG4gKiAgICAgICAgICBncmVldCgpIHtcbiAqICAgICAgICAgICAgICByZXR1cm4gXCJIZWxsbywgXCIgKyB0aGlzLmdyZWV0aW5nO1xuICogICAgICAgICAgfVxuICogICAgICB9XG4gKiBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ZhbHVlPXRydWVdXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgdmFyIGNvbmZpZ3VyYWJsZTpCb29sZWFuRGVjb3JhdG9yID0gT2JqZWN0LmFzc2lnbihcbiAgICAodmFsdWU6IGJvb2xlYW4gPSB0cnVlKSA6IEZ1bmN0aW9uID0+ICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdmFsdWU7IH0sIHtcbiAgICBvbjogKCkgPT4gY29uZmlndXJhYmxlKHRydWUpLFxuICAgIG9mZjogKCkgPT4gY29uZmlndXJhYmxlKGZhbHNlKSxcbn0pO1xuXG4vKipcbiAqIEB3cml0YWJsZS5bb258b2ZmXSBtZXRob2QgZGVjb3JhdG9yXG4gKiBcbiAqIFdoZW4gdGhlIEB3cml0YWJsZShmYWxzZSkgZGVjb3JhdG9yIGlzIGNhbGxlZCwgaXQgbW9kaWZpZXMgdGhlIHdyaXRhYmxlIHByb3BlcnR5IG9mIHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yLlxuICogXG4gKiBFeGFtcGxlOlxuICogICAgICBjbGFzcyBHcmVldGVyIHtcbiAqICAgICAgICAgIGdyZWV0aW5nOiBzdHJpbmc7XG4gKiAgICAgICAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAqICAgICAgICAgICAgICB0aGlzLmdyZWV0aW5nID0gbWVzc2FnZTtcbiAqICAgICAgICAgIH1cbiAqICAgICAgXG4gKiAgICAgICAgICBAd3JpdGFibGUoZmFsc2UpXG4gKiAgICAgICAgICBncmVldCgpIHtcbiAqICAgICAgICAgICAgICByZXR1cm4gXCJIZWxsbywgXCIgKyB0aGlzLmdyZWV0aW5nO1xuICogICAgICAgICAgfVxuICogICAgICB9XG4gKiBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ZhbHVlPXRydWVdXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgdmFyIHdyaXRhYmxlOkJvb2xlYW5EZWNvcmF0b3IgPSBPYmplY3QuYXNzaWduKFxuICAgICh2YWx1ZTogYm9vbGVhbiA9IHRydWUpIDogRnVuY3Rpb24gPT4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHsgZGVzY3JpcHRvci53cml0YWJsZSA9IHZhbHVlOyB9LCB7XG4gICAgb246ICgpID0+IHdyaXRhYmxlKHRydWUpLFxuICAgIG9mZjogKCkgPT4gd3JpdGFibGUoZmFsc2UpLFxufSk7Il19