var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", './lib/decorators'], function (require, exports, decorators_1) {
    "use strict";
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
        decorators_1.enumerable.off,
        decorators_1.configurable.off,
        decorators_1.writable.off, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ObservableObject.prototype, "subscribe", null);
    __decorate([
        decorators_1.enumerable.off,
        decorators_1.configurable.off,
        decorators_1.writable.off, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ObservableObject.prototype, "unsubscribe", null);
    __decorate([
        decorators_1.enumerable.off,
        decorators_1.configurable.off,
        decorators_1.writable.off, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, String]), 
        __metadata('design:returntype', void 0)
    ], ObservableObject.prototype, "publish", null);
    exports.ObservableObject = ObservableObject;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVyZHktY29sb3ItY29yZS1hbHBoYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5lcmR5LWNvbG9yLWNvcmUtYWxwaGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFHQTtRQUNJLE9BQU8sV0FBVyxDQUFDLEdBQVEsSUFBbUIsTUFBTSxDQUFPLEdBQUksQ0FBQyxpQkFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFGWSxxQkFBYSxnQkFFekIsQ0FBQTtJQUVZLGlCQUFTLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RCwrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLGtEQUFrRDtJQUNsRCwrREFBK0Q7SUFDL0Qsa0JBQXlCLEdBQVEsSUFBbUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFBcEUsZ0JBQVEsV0FBNEQsQ0FBQTtJQUNwRixrQkFBeUIsR0FBUSxJQUFtQixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztJQUFwRSxnQkFBUSxXQUE0RCxDQUFBO0lBQ3BGLG9CQUEyQixHQUFRLElBQThCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQW5GLGtCQUFVLGFBQXlFLENBQUE7SUFDbkcsaUJBQXdCLEdBQVEsSUFBZSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBM0QsZUFBTyxVQUFvRCxDQUFBO0lBQzlELG1CQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUVyRCxtRUFBbUU7SUFDbkUsd0RBQXdEO0lBRXhELElBQWlCLEtBQUssQ0F5QnJCO0lBekJELFdBQWlCLEtBQUssRUFBQyxDQUFDO1FBQ3BCOztXQUVHO1FBQ0gsTUFBTSxXQUFXLEdBQUc7OztLQUduQixDQUFBO1FBRUQsb0JB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QyxHQUFHO1FBQUUseUJBQVksQ0FBQyxHQUFHO1FBQUUscUJBQVEsQ0FBQyxHQUFHOzs7O21EQUFBO0lBeEJ0Qyx3QkFBZ0IsbUJBa0M1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGVzLmQudHNcIiAvPlxuaW1wb3J0IHsgZW51bWVyYWJsZSwgY29uZmlndXJhYmxlLCB3cml0YWJsZSB9IGZyb20gJy4vbGliL2RlY29yYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgT2JlcnNlcnZhYmxlcyB7XG4gICAgc3RhdGljIG9ic2VydmVyc09mKG9iajogYW55KTogT2JzZXJ2ZXJBcnJheSB7IHJldHVybiAoPGFueT5vYmopW09CU0VSVkVSU107IH1cbn1cblxuZXhwb3J0IGNvbnN0IE9CU0VSVkVSUzogc3ltYm9sID0gU3ltYm9sLmZvcignT2JzZXJ2ZXJzJyk7XG4vLyBleHBvcnQgaW50ZXJmYWNlIEFyYml0cmFyeUZ1bmN0aW9uIHsgKC4uLmFyZ3M6IGFueVtdKTogYW55IH1cbi8vIGV4cG9ydCBpbnRlcmZhY2UgT2JzZXJ2ZXJGdW5jdGlvbiB7IChwYXlsb2FkOiBhbnksIHRvcGljPzogc3RyaW5nKTogdm9pZCB9XG4vLyBleHBvcnQgdHlwZSBPYnNlcnZlckFycmF5ID0gT2JzZXJ2ZXJGdW5jdGlvbltdO1xuLy8gZGVjbGFyZSBpbnRlcmZhY2UgT2JzZXJ2ZXJzIHsgW09CU0VSVkVSU10/OiBPYnNlcnZlckFycmF5OyB9XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqOiBhbnkpOiBvYmogaXMgc3RyaW5nIHsgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ3N0cmluZyc7IH1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihvYmo6IGFueSk6IG9iaiBpcyBudW1iZXIgeyByZXR1cm4gdHlwZW9mIG9iaiA9PSAnbnVtYmVyJzsgfVxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqOiBhbnkpOiBvYmogaXMgQXJiaXRyYXJ5RnVuY3Rpb24geyByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nOyB9XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShvYmo6IGFueSk6IG9iaiBpcyBbXSB7IHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7IH1cbmV4cG9ydCBjb25zdCBvYnNlcnZlcnNPZiA9IE9iZXJzZXJ2YWJsZXMub2JzZXJ2ZXJzT2Y7XG5cbi8vIGV4cG9ydCBkZWNsYXJlIHR5cGUgUGFyc2FibGVWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDtcbi8vIGV4cG9ydCBkZWNsYXJlIHR5cGUgUGFyc2VkVmFsdWUgPSBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBuYW1lc3BhY2UgUGFyc2Uge1xuICAgIC8qKlxuICAgICAqIE51bWJlclRlc3RzIGFyZSBzaG9ydCwgdXN1YWxseSBzaW5nbGUtbGluZXIsIGluLWJyb3dzZXIgY29uc29sZSB0ZXN0cy5cbiAgICAgKi9cbiAgICBjb25zdCBOdW1iZXJUZXN0cyA9IGBcbiAgICAgICAgcGFyc2VUYWJsZTogZ2VuZXJhdGUgY29uc29sZS50YWJsZSB3aXRoIHZhbHVlLCB0eXBlLCBwYXJzZUludCBhbmQgcGFyc2VGbG9hdCBmb3IgdmFsdWVcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoW1wiIDAgXCIsIFwiIDEgXCIsIFwiLjFcIiwgXCIwLjFcIiwgXCIxLjFcIiwgXCIyNTViXCIsIFwiMzAwXCJdLnJlZHVjZSgodGFibGUsIHYpID0+IHRhYmxlLnB1c2goeyBWYWx1ZTogdiwgVHlwZTogdHlwZW9mIHYsIEludGVnZXI6IHBhcnNlSW50KHYpLCBGbG9hdDogcGFyc2VGbG9hdCh2KSB9KSAmJiB0YWJsZSwgW10pKTtcbiAgICBgXG5cbiAgICBleHBvcnQgZnVuY3Rpb24gcmdiSW50ZWdlcih2YWx1ZTogUGFyc2FibGVWYWx1ZSk6IFBhcnNlZFZhbHVlIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkgdmFsdWUgPSAoL15cXHMqWzEyXT9cXGR7MSwyfSg/IVtcXC5dKS8pLnRlc3QodmFsdWUpID8gcGFyc2VJbnQodmFsdWUpIDogTmFOO1xuICAgICAgICByZXR1cm4gKGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDI1NSkgPyB2YWx1ZSA6IE5hTjtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gcmdiU2NhbGFyKHZhbHVlOiBQYXJzYWJsZVZhbHVlKTogUGFyc2VkVmFsdWUge1xuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB2YWx1ZSA9ICgvXlxccyooWzEwXT9cXC5cXGQrfFsxMF0pKD8hW1xcLl0pLykudGVzdCh2YWx1ZS50cmltKCkpID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiBOYU47XG4gICAgICAgIHJldHVybiAoaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMSkgPyB2YWx1ZSA6IE5hTjtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gcmdiKHZhbHVlOiBQYXJzYWJsZVZhbHVlKTogUGFyc2VkVmFsdWUge1xuICAgICAgICBjb25zdCBzdHJpbmdNb2RlID0gaXNTdHJpbmcodmFsdWUpLCBudW1iZXJNb2RlID0gaXNOdW1iZXIodmFsdWUpO1xuICAgICAgICBjb25zdCBpbnRlZ2VyID0gKDxudW1iZXI+cmdiSW50ZWdlcih2YWx1ZSkpLCBzY2FsYXIgPSAoKHN0cmluZ01vZGUgJiYgKC9cXC4vKS50ZXN0KDxzdHJpbmc+dmFsdWUpKSB8fCBudW1iZXJNb2RlKSA/ICg8bnVtYmVyPnJnYlNjYWxhcih2YWx1ZSkpIDogTmFOO1xuICAgICAgICBjb25zdCB2YWxpZEludGVnZXIgPSAhaXNOYU4oaW50ZWdlciksIHZhbGlkU2NhbGFyID0gIWlzTmFOKHNjYWxhcik7XG4gICAgICAgIHJldHVybiAodmFsaWRJbnRlZ2VyIHx8IHZhbGlkU2NhbGFyKSA/IE51bWJlcihpbnRlZ2VyIHx8IHNjYWxhciB8fCAwKSA6IChpbnRlZ2VyID09PSBzY2FsYXIpID8gaW50ZWdlciA6ICh2YWxpZFNjYWxhcikgPyBzY2FsYXIgOiBOYU47XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5vYnNlcnZlcnM6IE9ic2VydmVyQXJyYXkpIHtcbiAgICAgICAgb2JzZXJ2ZXJzID0gaXNBcnJheShvYnNlcnZlcnMpID8gb2JzZXJ2ZXJzLmZpbHRlcihvYnNlcnZlciA9PiBpc0Z1bmN0aW9uKG9ic2VydmVyKSkgOiBbXTsgLy8gKDxhbnk+dGhpcylbT0JTRVJWRVJTXSA9ICg8T2JzZXJ2ZXJBcnJheT5bXSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBPQlNFUlZFUlMsIHsgZ2V0OiAoKSA9PiB7IHJldHVybiBvYnNlcnZlcnM7IH0sIGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IGZhbHNlIH0pOyAvLyB2YWx1ZTogKDxPYnNlcnZlckFycmF5PltdKSxcbiAgICB9XG5cbiAgICBAZW51bWVyYWJsZS5vZmYgQGNvbmZpZ3VyYWJsZS5vZmYgQHdyaXRhYmxlLm9mZlxuICAgIHN1YnNjcmliZSguLi5vYnNlcnZlcnM6IE9ic2VydmVyQXJyYXkpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJMaXN0ID0gb2JzZXJ2ZXJzT2YodGhpcyk7XG4gICAgICAgIGZvciAobGV0IG9ic2VydmVyIG9mIG9ic2VydmVycykge1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ob2JzZXJ2ZXIpICYmIG9ic2VydmVyTGlzdC5pbmRleE9mKG9ic2VydmVyKSA9PSAtMSkgb2JzZXJ2ZXJMaXN0LnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVudW1lcmFibGUub2ZmIEBjb25maWd1cmFibGUub2ZmIEB3cml0YWJsZS5vZmZcbiAgICB1bnN1YnNjcmliZSguLi5vYnNlcnZlcnM6IE9ic2VydmVyQXJyYXkpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJMaXN0ID0gb2JzZXJ2ZXJzT2YodGhpcyk7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBvYnNlcnZlciBvZiBvYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIGlmICgoaW5kZXggPSBvYnNlcnZlckxpc3QuaW5kZXhPZihvYnNlcnZlcikpID4gLTEpIG9ic2VydmVyTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVudW1lcmFibGUub2ZmIEBjb25maWd1cmFibGUub2ZmIEB3cml0YWJsZS5vZmZcbiAgICBwdWJsaXNoKHBheWxvYWQ6IGFueSwgdG9waWM/OiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgb2JzZXJ2ZXIgb2Ygb2JzZXJ2ZXJzT2YodGhpcykpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIocGF5bG9hZCwgdG9waWMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUHVibGlzaCBlcnJvciBmb3IgJXMgYnkgJU8gd2l0aCBwYXlsb2FkICVPIHdoZW4gY2FsbGluZyAlTy5cXG5cXHQnLCB0b3BpYywgdGhpcywgcGF5bG9hZCwgb2JzZXJ2ZXIsIGV4Y2VwdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=