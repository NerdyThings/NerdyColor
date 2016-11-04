var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "./lib/decorators"], function (require, exports) {
    "use strict";
    /// <reference path="types.d.ts" />
    const decorators_1 = require("./lib/decorators");
    class Oberservables {
        static observersOf(obj) { return obj[exports.OBSERVERS]; }
    }
    exports.Oberservables = Oberservables;
    exports.OBSERVERS = Symbol.for('Observers');
    // export interface ArbitraryFunction { (...args: any[]): any }
    // export interface ObserverFunction { (payload: any, topic?: string): void }
    // export type ObserverArray = ObserverFunction[];
    // declare interface Observers { [OBSERVERS]?: ObserverArray; }
    function isString(obj) { return typeof obj == 'string'; }
    exports.isString = isString;
    function isNumber(obj) { return typeof obj == 'number'; }
    exports.isNumber = isNumber;
    function isFunction(obj) { return typeof obj == 'function'; }
    exports.isFunction = isFunction;
    function isArray(obj) { return Array.isArray(obj); }
    exports.isArray = isArray;
    exports.observersOf = Oberservables.observersOf;
    // export declare type ParsableValue = string | number | undefined;
    // export declare type ParsedValue = number | undefined;
    var Parse;
    (function (Parse) {
        /**
         * NumberTests are short, usually single-liner, in-browser console tests.
         */
        const NumberTests = `
        parseTable: generate console.table with value, type, parseInt and parseFloat for value
            console.table([" 0 ", " 1 ", ".1", "0.1", "1.1", "255b", "300"].reduce((table, v) => table.push({ Value: v, Type: typeof v, Integer: parseInt(v), Float: parseFloat(v) }) && table, []));
    `;
        function rgbInteger(value) {
            if (isString(value))
                value = (/^\s*[12]?\d{1,2}(?![\.])/).test(value) ? parseInt(value) : NaN;
            return (isNumber(value) && value >= 0 && value <= 255) ? value : NaN;
        }
        Parse.rgbInteger = rgbInteger;
        function rgbScalar(value) {
            if (isString(value))
                value = (/^\s*([10]?\.\d+|[10])(?![\.])/).test(value.trim()) ? parseFloat(value) : NaN;
            return (isNumber(value) && value >= 0 && value <= 1) ? value : NaN;
        }
        Parse.rgbScalar = rgbScalar;
        function rgb(value) {
            const stringMode = isString(value), numberMode = isNumber(value);
            const integer = rgbInteger(value), scalar = ((stringMode && (/\./).test(value)) || numberMode) ? rgbScalar(value) : NaN;
            const validInteger = !isNaN(integer), validScalar = !isNaN(scalar);
            return (validInteger || validScalar) ? Number(integer || scalar || 0) : (integer === scalar) ? integer : (validScalar) ? scalar : NaN;
        }
        Parse.rgb = rgb;
    })(Parse = exports.Parse || (exports.Parse = {}));
    class ObservableObject {
        constructor(...observers) {
            observers = isArray(observers) ? observers.filter(observer => isFunction(observer)) : []; // (<any>this)[OBSERVERS] = (<ObserverArray>[]);
            Object.defineProperty(this, exports.OBSERVERS, { get: () => { return observers; }, enumerable: false, configurable: false }); // value: (<ObserverArray>[]),
        }
        subscribe(...observers) {
            const observerList = exports.observersOf(this);
            for (let observer of observers) {
                if (isFunction(observer) && observerList.indexOf(observer) == -1)
                    observerList.push(observer);
            }
        }
        unsubscribe(...observers) {
            const observerList = exports.observersOf(this);
            let index = -1;
            for (let observer of observers) {
                if ((index = observerList.indexOf(observer)) > -1)
                    observerList.splice(index, 1);
            }
        }
        publish(payload, topic) {
            for (let observer of exports.observersOf(this)) {
                try {
                    observer(payload, topic);
                }
                catch (exception) {
                    console.error('Publish error for %s by %O with payload %O when calling %O.\n\t', topic, this, payload, observer, exception);
                }
            }
        }
    }
    __decorate([
        decorators_1.enumerable.off, decorators_1.configurable.off, decorators_1.writable.off,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ObservableObject.prototype, "subscribe", null);
    __decorate([
        decorators_1.enumerable.off, decorators_1.configurable.off, decorators_1.writable.off,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ObservableObject.prototype, "unsubscribe", null);
    __decorate([
        decorators_1.enumerable.off, decorators_1.configurable.off, decorators_1.writable.off,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", void 0)
    ], ObservableObject.prototype, "publish", null);
    exports.ObservableObject = ObservableObject;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVyZHktY29sb3ItY29yZS1hbHBoYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL25lcmR5LWNvbG9yLWNvcmUtYWxwaGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsbUNBQW1DO0lBQ25DLGlEQUFzRTtJQUV0RTtRQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBUSxJQUFtQixNQUFNLENBQU8sR0FBSSxDQUFDLGlCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEY7SUFGRCxzQ0FFQztJQUVZLFFBQUEsU0FBUyxHQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekQsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxrREFBa0Q7SUFDbEQsK0RBQStEO0lBQy9ELGtCQUF5QixHQUFRLElBQW1CLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQXBGLDRCQUFvRjtJQUNwRixrQkFBeUIsR0FBUSxJQUFtQixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztJQUFwRiw0QkFBb0Y7SUFDcEYsb0JBQTJCLEdBQVEsSUFBOEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFBbkcsZ0NBQW1HO0lBQ25HLGlCQUF3QixHQUFRLElBQWUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQTNFLDBCQUEyRTtJQUM5RCxRQUFBLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBRXJELG1FQUFtRTtJQUNuRSx3REFBd0Q7SUFFeEQsSUFBaUIsS0FBSyxDQXlCckI7SUF6QkQsV0FBaUIsS0FBSztRQUNsQjs7V0FFRztRQUNILE1BQU0sV0FBVyxHQUFHOzs7S0FHbkIsQ0FBQTtRQUVELG9CQUEyQixLQUFvQjtZQUMz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QUFDLEdBQUcsRUFBRSxxQkFBUSxDQUFDLEdBQUc7Ozs7bURBUzlDO0lBakNMLDRDQWtDQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBlcy5kLnRzXCIgLz5cbmltcG9ydCB7IGVudW1lcmFibGUsIGNvbmZpZ3VyYWJsZSwgd3JpdGFibGUgfSBmcm9tICcuL2xpYi9kZWNvcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIE9iZXJzZXJ2YWJsZXMge1xuICAgIHN0YXRpYyBvYnNlcnZlcnNPZihvYmo6IGFueSk6IE9ic2VydmVyQXJyYXkgeyByZXR1cm4gKDxhbnk+b2JqKVtPQlNFUlZFUlNdOyB9XG59XG5cbmV4cG9ydCBjb25zdCBPQlNFUlZFUlM6IHN5bWJvbCA9IFN5bWJvbC5mb3IoJ09ic2VydmVycycpO1xuLy8gZXhwb3J0IGludGVyZmFjZSBBcmJpdHJhcnlGdW5jdGlvbiB7ICguLi5hcmdzOiBhbnlbXSk6IGFueSB9XG4vLyBleHBvcnQgaW50ZXJmYWNlIE9ic2VydmVyRnVuY3Rpb24geyAocGF5bG9hZDogYW55LCB0b3BpYz86IHN0cmluZyk6IHZvaWQgfVxuLy8gZXhwb3J0IHR5cGUgT2JzZXJ2ZXJBcnJheSA9IE9ic2VydmVyRnVuY3Rpb25bXTtcbi8vIGRlY2xhcmUgaW50ZXJmYWNlIE9ic2VydmVycyB7IFtPQlNFUlZFUlNdPzogT2JzZXJ2ZXJBcnJheTsgfVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iajogYW55KTogb2JqIGlzIHN0cmluZyB7IHJldHVybiB0eXBlb2Ygb2JqID09ICdzdHJpbmcnOyB9XG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIob2JqOiBhbnkpOiBvYmogaXMgbnVtYmVyIHsgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ251bWJlcic7IH1cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iajogYW55KTogb2JqIGlzIEFyYml0cmFyeUZ1bmN0aW9uIHsgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJzsgfVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkob2JqOiBhbnkpOiBvYmogaXMgW10geyByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopOyB9XG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXJzT2YgPSBPYmVyc2VydmFibGVzLm9ic2VydmVyc09mO1xuXG4vLyBleHBvcnQgZGVjbGFyZSB0eXBlIFBhcnNhYmxlVmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XG4vLyBleHBvcnQgZGVjbGFyZSB0eXBlIFBhcnNlZFZhbHVlID0gbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgbmFtZXNwYWNlIFBhcnNlIHtcbiAgICAvKipcbiAgICAgKiBOdW1iZXJUZXN0cyBhcmUgc2hvcnQsIHVzdWFsbHkgc2luZ2xlLWxpbmVyLCBpbi1icm93c2VyIGNvbnNvbGUgdGVzdHMuXG4gICAgICovXG4gICAgY29uc3QgTnVtYmVyVGVzdHMgPSBgXG4gICAgICAgIHBhcnNlVGFibGU6IGdlbmVyYXRlIGNvbnNvbGUudGFibGUgd2l0aCB2YWx1ZSwgdHlwZSwgcGFyc2VJbnQgYW5kIHBhcnNlRmxvYXQgZm9yIHZhbHVlXG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKFtcIiAwIFwiLCBcIiAxIFwiLCBcIi4xXCIsIFwiMC4xXCIsIFwiMS4xXCIsIFwiMjU1YlwiLCBcIjMwMFwiXS5yZWR1Y2UoKHRhYmxlLCB2KSA9PiB0YWJsZS5wdXNoKHsgVmFsdWU6IHYsIFR5cGU6IHR5cGVvZiB2LCBJbnRlZ2VyOiBwYXJzZUludCh2KSwgRmxvYXQ6IHBhcnNlRmxvYXQodikgfSkgJiYgdGFibGUsIFtdKSk7XG4gICAgYFxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHJnYkludGVnZXIodmFsdWU6IFBhcnNhYmxlVmFsdWUpOiBQYXJzZWRWYWx1ZSB7XG4gICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHZhbHVlID0gKC9eXFxzKlsxMl0/XFxkezEsMn0oPyFbXFwuXSkvKS50ZXN0KHZhbHVlKSA/IHBhcnNlSW50KHZhbHVlKSA6IE5hTjtcbiAgICAgICAgcmV0dXJuIChpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAyNTUpID8gdmFsdWUgOiBOYU47XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHJnYlNjYWxhcih2YWx1ZTogUGFyc2FibGVWYWx1ZSk6IFBhcnNlZFZhbHVlIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkgdmFsdWUgPSAoL15cXHMqKFsxMF0/XFwuXFxkK3xbMTBdKSg/IVtcXC5dKS8pLnRlc3QodmFsdWUudHJpbSgpKSA/IHBhcnNlRmxvYXQodmFsdWUpIDogTmFOO1xuICAgICAgICByZXR1cm4gKGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDEpID8gdmFsdWUgOiBOYU47XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHJnYih2YWx1ZTogUGFyc2FibGVWYWx1ZSk6IFBhcnNlZFZhbHVlIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nTW9kZSA9IGlzU3RyaW5nKHZhbHVlKSwgbnVtYmVyTW9kZSA9IGlzTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgY29uc3QgaW50ZWdlciA9ICg8bnVtYmVyPnJnYkludGVnZXIodmFsdWUpKSwgc2NhbGFyID0gKChzdHJpbmdNb2RlICYmICgvXFwuLykudGVzdCg8c3RyaW5nPnZhbHVlKSkgfHwgbnVtYmVyTW9kZSkgPyAoPG51bWJlcj5yZ2JTY2FsYXIodmFsdWUpKSA6IE5hTjtcbiAgICAgICAgY29uc3QgdmFsaWRJbnRlZ2VyID0gIWlzTmFOKGludGVnZXIpLCB2YWxpZFNjYWxhciA9ICFpc05hTihzY2FsYXIpO1xuICAgICAgICByZXR1cm4gKHZhbGlkSW50ZWdlciB8fCB2YWxpZFNjYWxhcikgPyBOdW1iZXIoaW50ZWdlciB8fCBzY2FsYXIgfHwgMCkgOiAoaW50ZWdlciA9PT0gc2NhbGFyKSA/IGludGVnZXIgOiAodmFsaWRTY2FsYXIpID8gc2NhbGFyIDogTmFOO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoLi4ub2JzZXJ2ZXJzOiBPYnNlcnZlckFycmF5KSB7XG4gICAgICAgIG9ic2VydmVycyA9IGlzQXJyYXkob2JzZXJ2ZXJzKSA/IG9ic2VydmVycy5maWx0ZXIob2JzZXJ2ZXIgPT4gaXNGdW5jdGlvbihvYnNlcnZlcikpIDogW107IC8vICg8YW55PnRoaXMpW09CU0VSVkVSU10gPSAoPE9ic2VydmVyQXJyYXk+W10pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgT0JTRVJWRVJTLCB7IGdldDogKCkgPT4geyByZXR1cm4gb2JzZXJ2ZXJzOyB9LCBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiBmYWxzZSB9KTsgLy8gdmFsdWU6ICg8T2JzZXJ2ZXJBcnJheT5bXSksXG4gICAgfVxuXG4gICAgQGVudW1lcmFibGUub2ZmIEBjb25maWd1cmFibGUub2ZmIEB3cml0YWJsZS5vZmZcbiAgICBzdWJzY3JpYmUoLi4ub2JzZXJ2ZXJzOiBPYnNlcnZlckFycmF5KSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyTGlzdCA9IG9ic2VydmVyc09mKHRoaXMpO1xuICAgICAgICBmb3IgKGxldCBvYnNlcnZlciBvZiBvYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKG9ic2VydmVyKSAmJiBvYnNlcnZlckxpc3QuaW5kZXhPZihvYnNlcnZlcikgPT0gLTEpIG9ic2VydmVyTGlzdC5wdXNoKG9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlbnVtZXJhYmxlLm9mZiBAY29uZmlndXJhYmxlLm9mZiBAd3JpdGFibGUub2ZmXG4gICAgdW5zdWJzY3JpYmUoLi4ub2JzZXJ2ZXJzOiBPYnNlcnZlckFycmF5KSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyTGlzdCA9IG9ic2VydmVyc09mKHRoaXMpO1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yIChsZXQgb2JzZXJ2ZXIgb2Ygb2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgICBpZiAoKGluZGV4ID0gb2JzZXJ2ZXJMaXN0LmluZGV4T2Yob2JzZXJ2ZXIpKSA+IC0xKSBvYnNlcnZlckxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlbnVtZXJhYmxlLm9mZiBAY29uZmlndXJhYmxlLm9mZiBAd3JpdGFibGUub2ZmXG4gICAgcHVibGlzaChwYXlsb2FkOiBhbnksIHRvcGljPzogc3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IG9ic2VydmVyIG9mIG9ic2VydmVyc09mKHRoaXMpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyKHBheWxvYWQsIHRvcGljKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1B1Ymxpc2ggZXJyb3IgZm9yICVzIGJ5ICVPIHdpdGggcGF5bG9hZCAlTyB3aGVuIGNhbGxpbmcgJU8uXFxuXFx0JywgdG9waWMsIHRoaXMsIHBheWxvYWQsIG9ic2VydmVyLCBleGNlcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19