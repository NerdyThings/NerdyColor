var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="types.d.ts" />
// Source: https://www.typescriptlang.org/docs/handbook/decorators.html
define("lib/decorators", ["require", "exports"], function (require, exports) {
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
define("nerdy-color-core-alpha", ["require", "exports", "lib/decorators"], function (require, exports, decorators_1) {
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
define("nerdy-color-alpha", ["require", "exports", "nerdy-color-core-alpha"], function (require, exports, nerdy_color_core_alpha_1) {
    "use strict";
    const parseRGB = nerdy_color_core_alpha_1.Parse.rgb;
    ///<amd-module name="NerdyColor"/>
    var NerdyColor;
    (function (NerdyColor) {
        class Utils {
        }
        Utils.Parse = nerdy_color_core_alpha_1.Parse;
        Utils.ObservableObject = nerdy_color_core_alpha_1.ObservableObject;
        Utils.observersOf = nerdy_color_core_alpha_1.Oberservables.observersOf;
        NerdyColor.Utils = Utils;
        class Color extends nerdy_color_core_alpha_1.ObservableObject {
            constructor({ r, g, b, alpha = 1.0, components = [0, 0, 0], componentNames = ['r', 'g', 'b'] } = {}) {
                super();
                // console.log('new NerdyColor.Color', { r, g, b, alpha, components, componentNames, mode: (componentNames.length ? componentNames : componentNames = (componentNames = ['r', 'g', 'b'])).join("").toLowerCase(), arguments });
                const fail = (reason = 'Color parameters cannot be parsed!') => { throw 'Cannot create color: ' + reason; };
                // Parse colorSpecification: string (Only rgb() and rgba() css syntax supported)
                if (nerdy_color_core_alpha_1.isString(arguments[0])) {
                    ((colorString) => {
                        var matchedString, matchedComponents;
                        if ((/\#[0-9A-F]{3,6}/i).test(colorString)) {
                            fail('Hex color parameters cannot be parsed yet!');
                        }
                        else if ((/rgba?\s*\(\s*\d+\s*\,\s*\d+\s*\,\s*\d+\s*[\,\)]/).test(colorString)) {
                            [matchedString] = colorString.match(/rgba?\s*\(.*?\)/i);
                            matchedComponents = colorString.match(/\b([01]?\.\d+|1|0|\d+)\b/g);
                            if (matchedComponents.length >= 3) {
                                components = [parseRGB(matchedComponents[0]) || 0, parseRGB(matchedComponents[1]) || 0, parseRGB(matchedComponents[2]) || 0];
                                componentNames = ['r', 'g', 'b'];
                            }
                            else
                                fail('RGB color parameters cannot be parsed: ' + matchedString);
                            if (matchedComponents.length >= 4)
                                alpha = Math.min(Math.max(0, parseFloat(matchedComponents[3])), 1);
                        } // other cases to be added later
                    })(arguments[0]);
                }
                // Determine Mode (Only rgb supported so far)
                this.mode = (componentNames.length ? componentNames : componentNames = (componentNames = ['r', 'g', 'b'])).join("").toLowerCase();
                if (this.mode === 'rgb')
                    components = [(nerdy_color_core_alpha_1.isNumber(r) ? r : components[0] || 0), (nerdy_color_core_alpha_1.isNumber(g) ? g : components[1] || 0), (nerdy_color_core_alpha_1.isNumber(b) ? b : components[2] || 0)];
                this.components = components, this.componentNames = componentNames, this.alpha = alpha;
            }
            getComponent(id) {
                let index = parseInt(id);
                if (isNaN(index) && nerdy_color_core_alpha_1.isString(id))
                    index = (this.componentNames || ['r', 'g', 'b']).indexOf(id.toLowerCase());
                return this.components[index];
            }
            getComponents() {
                return this.components;
            }
            setComponents({ r = this.getComponent('r'), g = this.getComponent('g'), b = this.getComponent('b') }) {
                r = nerdy_color_core_alpha_1.Parse.rgb(r), g = nerdy_color_core_alpha_1.Parse.rgb(g), b = nerdy_color_core_alpha_1.Parse.rgb(b);
                if (this.components[0] === r && this.components[2] === g && this.components[1] === b)
                    return false;
                /* Changed */ this.components = [r, g, b], this.publish(this, 'components-changed');
                return true;
            }
        }
        NerdyColor.Color = Color;
        // export declare interface ColorConstructor {
        //     new (colorSpecification?: string|ColorConstructorParameters) : Color;
        // }
    })(NerdyColor = exports.NerdyColor || (exports.NerdyColor = {}));
});
// export default NerdyColor; 
///<amd-module name="NerdyColor"/>
define("NerdyColor", ["require", "exports", "nerdy-color-alpha"], function (require, exports, nerdy_color_alpha_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(nerdy_color_alpha_1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVyZHktY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZGVjb3JhdG9ycy50cyIsIi4uLy4uL25lcmR5LWNvbG9yLWNvcmUtYWxwaGEudHMiLCIuLi8uLi9uZXJkeS1jb2xvci1hbHBoYS50cyIsIi4uLy4uL25lcmR5LWNvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1DQUFtQztBQUNuQyx1RUFBdUU7OztJQUV2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0JHO0lBQ0gsZ0JBQXVCLFdBQXFCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBL0csd0JBQStHO0lBRS9HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNRLFFBQUEsVUFBVSxHQUFvQixNQUFNLENBQUMsTUFBTSxDQUNsRCxDQUFDLFFBQWlCLElBQUksS0FBZ0IsQ0FBQyxNQUFXLEVBQUUsV0FBbUIsRUFBRSxVQUE4QixPQUFPLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2hKLEVBQUUsRUFBRSxNQUFNLGtCQUFVLENBQUMsSUFBSSxDQUFDO1FBQzFCLEdBQUcsRUFBRSxNQUFNLGtCQUFVLENBQUMsS0FBSyxDQUFDO0tBQy9CLENBQUMsQ0FBQztJQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNRLFFBQUEsWUFBWSxHQUFvQixNQUFNLENBQUMsTUFBTSxDQUNwRCxDQUFDLFFBQWlCLElBQUksS0FBZ0IsQ0FBQyxNQUFXLEVBQUUsV0FBbUIsRUFBRSxVQUE4QixPQUFPLFVBQVUsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2xKLEVBQUUsRUFBRSxNQUFNLG9CQUFZLENBQUMsSUFBSSxDQUFDO1FBQzVCLEdBQUcsRUFBRSxNQUFNLG9CQUFZLENBQUMsS0FBSyxDQUFDO0tBQ2pDLENBQUMsQ0FBQztJQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNRLFFBQUEsUUFBUSxHQUFvQixNQUFNLENBQUMsTUFBTSxDQUNoRCxDQUFDLFFBQWlCLElBQUksS0FBZ0IsQ0FBQyxNQUFXLEVBQUUsV0FBbUIsRUFBRSxVQUE4QixPQUFPLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzlJLEVBQUUsRUFBRSxNQUFNLGdCQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEdBQUcsRUFBRSxNQUFNLGdCQUFRLENBQUMsS0FBSyxDQUFDO0tBQzdCLENBQUMsQ0FBQzs7OztJQ3BHSDtRQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBUSxJQUFtQixNQUFNLENBQU8sR0FBSSxDQUFDLGlCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEY7SUFGRCxzQ0FFQztJQUVZLFFBQUEsU0FBUyxHQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekQsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxrREFBa0Q7SUFDbEQsK0RBQStEO0lBQy9ELGtCQUF5QixHQUFRLElBQW1CLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQXBGLDRCQUFvRjtJQUNwRixrQkFBeUIsR0FBUSxJQUFtQixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztJQUFwRiw0QkFBb0Y7SUFDcEYsb0JBQTJCLEdBQVEsSUFBOEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFBbkcsZ0NBQW1HO0lBQ25HLGlCQUF3QixHQUFRLElBQWUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQTNFLDBCQUEyRTtJQUM5RCxRQUFBLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBRXJELG1FQUFtRTtJQUNuRSx3REFBd0Q7SUFFeEQsSUFBaUIsS0FBSyxDQXlCckI7SUF6QkQsV0FBaUIsS0FBSztRQUNsQjs7V0FFRztRQUNILE1BQU0sV0FBVyxHQUFHOzs7S0FHbkIsQ0FBQTtRQUVELG9CQUEyQixLQUFvQjtZQUMzQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUM5RixNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN6RSxDQUFDO1FBSGUsZ0JBQVUsYUFHekIsQ0FBQTtRQUVELG1CQUEwQixLQUFvQjtZQUMxQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUM1RyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN2RSxDQUFDO1FBSGUsZUFBUyxZQUd4QixDQUFBO1FBRUQsYUFBb0IsS0FBb0I7WUFDcEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsTUFBTSxPQUFPLEdBQVksVUFBVSxDQUFDLEtBQUssQ0FBRSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFTLEtBQUssQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLEdBQVksU0FBUyxDQUFDLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztZQUNwSixNQUFNLFlBQVksR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxXQUFXLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkUsTUFBTSxDQUFDLENBQUMsWUFBWSxJQUFJLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDMUksQ0FBQztRQUxlLFNBQUcsTUFLbEIsQ0FBQTtJQUNMLENBQUMsRUF6QmdCLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQXlCckI7SUFFRDtRQUVJLFlBQVksR0FBRyxTQUF3QjtZQUNuQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGdEQUFnRDtZQUMxSSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxpQkFBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsOEJBQThCO1FBQ3hKLENBQUM7UUFHRCxTQUFTLENBQUMsR0FBRyxTQUF3QjtZQUNqQyxNQUFNLFlBQVksR0FBRyxtQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEcsQ0FBQztRQUNMLENBQUM7UUFHRCxXQUFXLENBQUMsR0FBRyxTQUF3QjtZQUNuQyxNQUFNLFlBQVksR0FBRyxtQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2YsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JGLENBQUM7UUFDTCxDQUFDO1FBR0QsT0FBTyxDQUFDLE9BQVksRUFBRSxLQUFjO1lBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUM7b0JBQ0QsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsQ0FBRTtnQkFBQSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLGlFQUFpRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDaEksQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0tBQ0o7SUExQkc7UUFEQyx1QkFBVSxDQUFDLEdBQUcsRUFBRSx5QkFBWSxDQUFDLEdBQUcsRUFBRSxxQkFBUSxDQUFDLEdBQUc7Ozs7cURBTTlDO0lBR0Q7UUFEQyx1QkFBVSxDQUFDLEdBQUcsRUFBRSx5QkFBWSxDQUFDLEdBQUcsRUFBRSxxQkFBUSxDQUFDLEdBQUc7Ozs7dURBTzlDO0lBR0Q7UUFEQyx1QkFBVSxDQUFDLEdBQUcsRUFBRSx5QkFBWSxDQUFDLEdBQUcsRUFBRSxxQkFBUSxDQUFDLEdBQUc7Ozs7bURBUzlDO0lBakNMLDRDQWtDQzs7OztJQy9FRCxNQUFNLFFBQVEsR0FBRyw4QkFBSyxDQUFDLEdBQUcsQ0FBQztJQUUzQixrQ0FBa0M7SUFDbEMsSUFBYyxVQUFVLENBa0V2QjtJQWxFRCxXQUFjLFVBQVU7UUFFcEI7O1FBQ1csV0FBSyxHQUFHLDhCQUFLLENBQUM7UUFDZCxzQkFBZ0IsR0FBRyx5Q0FBZ0IsQ0FBQztRQUNwQyxpQkFBVyxHQUFHLHNDQUFhLENBQUMsV0FBVyxDQUFDO1FBSHRDLGdCQUFLLFFBSWpCLENBQUE7UUFFRCxXQUFtQixTQUFRLHlDQUFnQjtZQU92QyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLGNBQWMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQWlDLEVBQUU7Z0JBQzNILEtBQUssRUFBRSxDQUFDO2dCQUNSLCtOQUErTjtnQkFDL04sTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsb0NBQW9DLE9BQU8sTUFBTSx1QkFBdUIsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBRTNHLGdGQUFnRjtnQkFDaEYsRUFBRSxDQUFDLENBQUMsaUNBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxXQUFtQjt3QkFDakIsSUFBSSxhQUFxQixFQUFFLGlCQUEyQixDQUFDO3dCQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDekMsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7d0JBQ3ZELENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaURBQWlELENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMvRSxDQUFDLGFBQWEsQ0FBQyxHQUFhLFdBQVcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFDbEUsaUJBQWlCLEdBQWEsV0FBVyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOzRCQUM3RSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDaEMsVUFBVSxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQ0FDN0gsY0FBYyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDckMsQ0FBQzs0QkFBQyxJQUFJO2dDQUFDLElBQUksQ0FBQyx5Q0FBeUMsR0FBRyxhQUFhLENBQUMsQ0FBQzs0QkFDdkUsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztnQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMxRyxDQUFDLENBQUMsZ0NBQWdDO29CQUN0QyxDQUFDLENBQUMsQ0FBUyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCw2Q0FBNkM7Z0JBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2xJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDO29CQUFDLFVBQVUsR0FBYSxDQUFFLENBQUMsaUNBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsaUNBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsaUNBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLENBQUM7Z0JBQzNLLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzNGLENBQUM7WUFFRCxZQUFZLENBQUMsRUFBbUI7Z0JBQzVCLElBQUksS0FBSyxHQUFXLFFBQVEsQ0FBVSxFQUFHLENBQUMsQ0FBQztnQkFDM0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLGlDQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQVUsRUFBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFFRCxhQUFhO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUM7WUFFRCxhQUFhLENBQUMsRUFBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBNEQ7Z0JBQ3pKLENBQUMsR0FBRyw4QkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsOEJBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLDhCQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNuRyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztnQkFDcEYsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1NBRUo7UUFyRFksZ0JBQUssUUFxRGpCLENBQUE7UUFFRCw4Q0FBOEM7UUFDOUMsNEVBQTRFO1FBQzVFLElBQUk7SUFDUixDQUFDLEVBbEVhLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBa0V2Qjs7QUFpQkQsNkJBQTZCO0FDekY3QixrQ0FBa0M7Ozs7OztJQUVsQyw4QkFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwZXMuZC50c1wiIC8+XG4vLyBTb3VyY2U6IGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL2RlY29yYXRvcnMuaHRtbFxuXG4vKipcbiAqIEBzZWFsZWQgY2xhc3MgZGVjb3JhdG9yXG4gKiBcbiAqIFdoZW4gQHNlYWxlZCBpcyBleGVjdXRlZCwgaXQgd2lsbCBzZWFsIGJvdGggdGhlIGNvbnN0cnVjdG9yIGFuZCBpdHMgcHJvdG90eXBlLlxuICogXG4gKiBFeGFtcGxlOlxuICogICAgICBAc2VhbGVkXG4gKiAgICAgIGNsYXNzIEdyZWV0ZXIge1xuICogICAgICAgICAgZ3JlZXRpbmc6IHN0cmluZztcbiAqICAgICAgICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICogICAgICAgICAgICAgIHRoaXMuZ3JlZXRpbmcgPSBtZXNzYWdlO1xuICogICAgICAgICAgfVxuICogICAgICAgICAgZ3JlZXQoKSB7XG4gKiAgICAgICAgICAgICAgcmV0dXJuIFwiSGVsbG8sIFwiICsgdGhpcy5ncmVldGluZztcbiAqICAgICAgICAgIH1cbiAqICAgICAgfVxuICogXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VhbGVkKGNvbnN0cnVjdG9yOiBGdW5jdGlvbikgeyBPYmplY3Quc2VhbChjb25zdHJ1Y3RvciksIE9iamVjdC5zZWFsKGNvbnN0cnVjdG9yLnByb3RvdHlwZSk7IH1cblxuLyoqXG4gKiBAZW51bWVyYWJsZS5bb258b2ZmXSBtZXRob2QgZGVjb3JhdG9yXG4gKiBcbiAqIFdoZW4gdGhlIEBlbnVtZXJhYmxlKGZhbHNlKSBkZWNvcmF0b3IgaXMgY2FsbGVkLCBpdCBtb2RpZmllcyB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBvZiB0aGUgcHJvcGVydHkgZGVzY3JpcHRvci5cbiAqIFxuICogRXhhbXBsZTpcbiAqICAgICAgY2xhc3MgR3JlZXRlciB7XG4gKiAgICAgICAgICBncmVldGluZzogc3RyaW5nO1xuICogICAgICAgICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gKiAgICAgICAgICAgICAgdGhpcy5ncmVldGluZyA9IG1lc3NhZ2U7XG4gKiAgICAgICAgICB9XG4gKiAgICAgIFxuICogICAgICAgICAgQGVudW1lcmFibGUoZmFsc2UpXG4gKiAgICAgICAgICBncmVldCgpIHtcbiAqICAgICAgICAgICAgICByZXR1cm4gXCJIZWxsbywgXCIgKyB0aGlzLmdyZWV0aW5nO1xuICogICAgICAgICAgfVxuICogICAgICB9XG4gKiBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ZhbHVlPXRydWVdXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgdmFyIGVudW1lcmFibGU6Qm9vbGVhbkRlY29yYXRvciA9IE9iamVjdC5hc3NpZ24oXG4gICAgKHZhbHVlOiBib29sZWFuID0gdHJ1ZSkgOiBGdW5jdGlvbiA9PiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4geyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSB2YWx1ZTsgfSwge1xuICAgIG9uOiAoKSA9PiBlbnVtZXJhYmxlKHRydWUpLFxuICAgIG9mZjogKCkgPT4gZW51bWVyYWJsZShmYWxzZSksXG59KTtcblxuLyoqXG4gKiBAY29uZmlndXJhYmxlLltvbnxvZmZdIG1ldGhvZCBkZWNvcmF0b3JcbiAqIFxuICogV2hlbiB0aGUgQGNvbmZpZ3VyYWJsZShmYWxzZSkgZGVjb3JhdG9yIGlzIGNhbGxlZCwgaXQgbW9kaWZpZXMgdGhlIGNvbmZpZ3VyYWJsZSBwcm9wZXJ0eSBvZiB0aGUgcHJvcGVydHkgZGVzY3JpcHRvci5cbiAqIFxuICogRXhhbXBsZTpcbiAqICAgICAgY2xhc3MgR3JlZXRlciB7XG4gKiAgICAgICAgICBncmVldGluZzogc3RyaW5nO1xuICogICAgICAgICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gKiAgICAgICAgICAgICAgdGhpcy5ncmVldGluZyA9IG1lc3NhZ2U7XG4gKiAgICAgICAgICB9XG4gKiAgICAgIFxuICogICAgICAgICAgQGNvbmZpZ3VyYWJsZShmYWxzZSlcbiAqICAgICAgICAgIGdyZWV0KCkge1xuICogICAgICAgICAgICAgIHJldHVybiBcIkhlbGxvLCBcIiArIHRoaXMuZ3JlZXRpbmc7XG4gKiAgICAgICAgICB9XG4gKiAgICAgIH1cbiAqIFxuICogQHBhcmFtIHtib29sZWFufSBbdmFsdWU9dHJ1ZV1cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCB2YXIgY29uZmlndXJhYmxlOkJvb2xlYW5EZWNvcmF0b3IgPSBPYmplY3QuYXNzaWduKFxuICAgICh2YWx1ZTogYm9vbGVhbiA9IHRydWUpIDogRnVuY3Rpb24gPT4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB2YWx1ZTsgfSwge1xuICAgIG9uOiAoKSA9PiBjb25maWd1cmFibGUodHJ1ZSksXG4gICAgb2ZmOiAoKSA9PiBjb25maWd1cmFibGUoZmFsc2UpLFxufSk7XG5cbi8qKlxuICogQHdyaXRhYmxlLltvbnxvZmZdIG1ldGhvZCBkZWNvcmF0b3JcbiAqIFxuICogV2hlbiB0aGUgQHdyaXRhYmxlKGZhbHNlKSBkZWNvcmF0b3IgaXMgY2FsbGVkLCBpdCBtb2RpZmllcyB0aGUgd3JpdGFibGUgcHJvcGVydHkgb2YgdGhlIHByb3BlcnR5IGRlc2NyaXB0b3IuXG4gKiBcbiAqIEV4YW1wbGU6XG4gKiAgICAgIGNsYXNzIEdyZWV0ZXIge1xuICogICAgICAgICAgZ3JlZXRpbmc6IHN0cmluZztcbiAqICAgICAgICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICogICAgICAgICAgICAgIHRoaXMuZ3JlZXRpbmcgPSBtZXNzYWdlO1xuICogICAgICAgICAgfVxuICogICAgICBcbiAqICAgICAgICAgIEB3cml0YWJsZShmYWxzZSlcbiAqICAgICAgICAgIGdyZWV0KCkge1xuICogICAgICAgICAgICAgIHJldHVybiBcIkhlbGxvLCBcIiArIHRoaXMuZ3JlZXRpbmc7XG4gKiAgICAgICAgICB9XG4gKiAgICAgIH1cbiAqIFxuICogQHBhcmFtIHtib29sZWFufSBbdmFsdWU9dHJ1ZV1cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCB2YXIgd3JpdGFibGU6Qm9vbGVhbkRlY29yYXRvciA9IE9iamVjdC5hc3NpZ24oXG4gICAgKHZhbHVlOiBib29sZWFuID0gdHJ1ZSkgOiBGdW5jdGlvbiA9PiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4geyBkZXNjcmlwdG9yLndyaXRhYmxlID0gdmFsdWU7IH0sIHtcbiAgICBvbjogKCkgPT4gd3JpdGFibGUodHJ1ZSksXG4gICAgb2ZmOiAoKSA9PiB3cml0YWJsZShmYWxzZSksXG59KTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwZXMuZC50c1wiIC8+XG5pbXBvcnQgeyBlbnVtZXJhYmxlLCBjb25maWd1cmFibGUsIHdyaXRhYmxlIH0gZnJvbSAnLi9saWIvZGVjb3JhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBPYmVyc2VydmFibGVzIHtcbiAgICBzdGF0aWMgb2JzZXJ2ZXJzT2Yob2JqOiBhbnkpOiBPYnNlcnZlckFycmF5IHsgcmV0dXJuICg8YW55Pm9iailbT0JTRVJWRVJTXTsgfVxufVxuXG5leHBvcnQgY29uc3QgT0JTRVJWRVJTOiBzeW1ib2wgPSBTeW1ib2wuZm9yKCdPYnNlcnZlcnMnKTtcbi8vIGV4cG9ydCBpbnRlcmZhY2UgQXJiaXRyYXJ5RnVuY3Rpb24geyAoLi4uYXJnczogYW55W10pOiBhbnkgfVxuLy8gZXhwb3J0IGludGVyZmFjZSBPYnNlcnZlckZ1bmN0aW9uIHsgKHBheWxvYWQ6IGFueSwgdG9waWM/OiBzdHJpbmcpOiB2b2lkIH1cbi8vIGV4cG9ydCB0eXBlIE9ic2VydmVyQXJyYXkgPSBPYnNlcnZlckZ1bmN0aW9uW107XG4vLyBkZWNsYXJlIGludGVyZmFjZSBPYnNlcnZlcnMgeyBbT0JTRVJWRVJTXT86IE9ic2VydmVyQXJyYXk7IH1cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6IGFueSk6IG9iaiBpcyBzdHJpbmcgeyByZXR1cm4gdHlwZW9mIG9iaiA9PSAnc3RyaW5nJzsgfVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iajogYW55KTogb2JqIGlzIG51bWJlciB7IHJldHVybiB0eXBlb2Ygb2JqID09ICdudW1iZXInOyB9XG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmo6IGFueSk6IG9iaiBpcyBBcmJpdHJhcnlGdW5jdGlvbiB7IHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbic7IH1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KG9iajogYW55KTogb2JqIGlzIFtdIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTsgfVxuZXhwb3J0IGNvbnN0IG9ic2VydmVyc09mID0gT2JlcnNlcnZhYmxlcy5vYnNlcnZlcnNPZjtcblxuLy8gZXhwb3J0IGRlY2xhcmUgdHlwZSBQYXJzYWJsZVZhbHVlID0gc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xuLy8gZXhwb3J0IGRlY2xhcmUgdHlwZSBQYXJzZWRWYWx1ZSA9IG51bWJlciB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IG5hbWVzcGFjZSBQYXJzZSB7XG4gICAgLyoqXG4gICAgICogTnVtYmVyVGVzdHMgYXJlIHNob3J0LCB1c3VhbGx5IHNpbmdsZS1saW5lciwgaW4tYnJvd3NlciBjb25zb2xlIHRlc3RzLlxuICAgICAqL1xuICAgIGNvbnN0IE51bWJlclRlc3RzID0gYFxuICAgICAgICBwYXJzZVRhYmxlOiBnZW5lcmF0ZSBjb25zb2xlLnRhYmxlIHdpdGggdmFsdWUsIHR5cGUsIHBhcnNlSW50IGFuZCBwYXJzZUZsb2F0IGZvciB2YWx1ZVxuICAgICAgICAgICAgY29uc29sZS50YWJsZShbXCIgMCBcIiwgXCIgMSBcIiwgXCIuMVwiLCBcIjAuMVwiLCBcIjEuMVwiLCBcIjI1NWJcIiwgXCIzMDBcIl0ucmVkdWNlKCh0YWJsZSwgdikgPT4gdGFibGUucHVzaCh7IFZhbHVlOiB2LCBUeXBlOiB0eXBlb2YgdiwgSW50ZWdlcjogcGFyc2VJbnQodiksIEZsb2F0OiBwYXJzZUZsb2F0KHYpIH0pICYmIHRhYmxlLCBbXSkpO1xuICAgIGBcblxuICAgIGV4cG9ydCBmdW5jdGlvbiByZ2JJbnRlZ2VyKHZhbHVlOiBQYXJzYWJsZVZhbHVlKTogUGFyc2VkVmFsdWUge1xuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB2YWx1ZSA9ICgvXlxccypbMTJdP1xcZHsxLDJ9KD8hW1xcLl0pLykudGVzdCh2YWx1ZSkgPyBwYXJzZUludCh2YWx1ZSkgOiBOYU47XG4gICAgICAgIHJldHVybiAoaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMjU1KSA/IHZhbHVlIDogTmFOO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiByZ2JTY2FsYXIodmFsdWU6IFBhcnNhYmxlVmFsdWUpOiBQYXJzZWRWYWx1ZSB7XG4gICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHZhbHVlID0gKC9eXFxzKihbMTBdP1xcLlxcZCt8WzEwXSkoPyFbXFwuXSkvKS50ZXN0KHZhbHVlLnRyaW0oKSkgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IE5hTjtcbiAgICAgICAgcmV0dXJuIChpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxKSA/IHZhbHVlIDogTmFOO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiByZ2IodmFsdWU6IFBhcnNhYmxlVmFsdWUpOiBQYXJzZWRWYWx1ZSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ01vZGUgPSBpc1N0cmluZyh2YWx1ZSksIG51bWJlck1vZGUgPSBpc051bWJlcih2YWx1ZSk7XG4gICAgICAgIGNvbnN0IGludGVnZXIgPSAoPG51bWJlcj5yZ2JJbnRlZ2VyKHZhbHVlKSksIHNjYWxhciA9ICgoc3RyaW5nTW9kZSAmJiAoL1xcLi8pLnRlc3QoPHN0cmluZz52YWx1ZSkpIHx8IG51bWJlck1vZGUpID8gKDxudW1iZXI+cmdiU2NhbGFyKHZhbHVlKSkgOiBOYU47XG4gICAgICAgIGNvbnN0IHZhbGlkSW50ZWdlciA9ICFpc05hTihpbnRlZ2VyKSwgdmFsaWRTY2FsYXIgPSAhaXNOYU4oc2NhbGFyKTtcbiAgICAgICAgcmV0dXJuICh2YWxpZEludGVnZXIgfHwgdmFsaWRTY2FsYXIpID8gTnVtYmVyKGludGVnZXIgfHwgc2NhbGFyIHx8IDApIDogKGludGVnZXIgPT09IHNjYWxhcikgPyBpbnRlZ2VyIDogKHZhbGlkU2NhbGFyKSA/IHNjYWxhciA6IE5hTjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKC4uLm9ic2VydmVyczogT2JzZXJ2ZXJBcnJheSkge1xuICAgICAgICBvYnNlcnZlcnMgPSBpc0FycmF5KG9ic2VydmVycykgPyBvYnNlcnZlcnMuZmlsdGVyKG9ic2VydmVyID0+IGlzRnVuY3Rpb24ob2JzZXJ2ZXIpKSA6IFtdOyAvLyAoPGFueT50aGlzKVtPQlNFUlZFUlNdID0gKDxPYnNlcnZlckFycmF5PltdKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIE9CU0VSVkVSUywgeyBnZXQ6ICgpID0+IHsgcmV0dXJuIG9ic2VydmVyczsgfSwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogZmFsc2UgfSk7IC8vIHZhbHVlOiAoPE9ic2VydmVyQXJyYXk+W10pLFxuICAgIH1cblxuICAgIEBlbnVtZXJhYmxlLm9mZiBAY29uZmlndXJhYmxlLm9mZiBAd3JpdGFibGUub2ZmXG4gICAgc3Vic2NyaWJlKC4uLm9ic2VydmVyczogT2JzZXJ2ZXJBcnJheSkge1xuICAgICAgICBjb25zdCBvYnNlcnZlckxpc3QgPSBvYnNlcnZlcnNPZih0aGlzKTtcbiAgICAgICAgZm9yIChsZXQgb2JzZXJ2ZXIgb2Ygb2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihvYnNlcnZlcikgJiYgb2JzZXJ2ZXJMaXN0LmluZGV4T2Yob2JzZXJ2ZXIpID09IC0xKSBvYnNlcnZlckxpc3QucHVzaChvYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZW51bWVyYWJsZS5vZmYgQGNvbmZpZ3VyYWJsZS5vZmYgQHdyaXRhYmxlLm9mZlxuICAgIHVuc3Vic2NyaWJlKC4uLm9ic2VydmVyczogT2JzZXJ2ZXJBcnJheSkge1xuICAgICAgICBjb25zdCBvYnNlcnZlckxpc3QgPSBvYnNlcnZlcnNPZih0aGlzKTtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IG9ic2VydmVyIG9mIG9ic2VydmVycykge1xuICAgICAgICAgICAgaWYgKChpbmRleCA9IG9ic2VydmVyTGlzdC5pbmRleE9mKG9ic2VydmVyKSkgPiAtMSkgb2JzZXJ2ZXJMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZW51bWVyYWJsZS5vZmYgQGNvbmZpZ3VyYWJsZS5vZmYgQHdyaXRhYmxlLm9mZlxuICAgIHB1Ymxpc2gocGF5bG9hZDogYW55LCB0b3BpYz86IHN0cmluZykge1xuICAgICAgICBmb3IgKGxldCBvYnNlcnZlciBvZiBvYnNlcnZlcnNPZih0aGlzKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlcihwYXlsb2FkLCB0b3BpYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQdWJsaXNoIGVycm9yIGZvciAlcyBieSAlTyB3aXRoIHBheWxvYWQgJU8gd2hlbiBjYWxsaW5nICVPLlxcblxcdCcsIHRvcGljLCB0aGlzLCBwYXlsb2FkLCBvYnNlcnZlciwgZXhjZXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBlcy5kLnRzXCIgLz5cbmltcG9ydCB7IGlzU3RyaW5nLCBpc051bWJlciwgaXNGdW5jdGlvbiwgT2JzZXJ2YWJsZU9iamVjdCwgb2JzZXJ2ZXJzT2YsIE9CU0VSVkVSUywgUGFyc2UsIE9iZXJzZXJ2YWJsZXMgfSBmcm9tICcuL25lcmR5LWNvbG9yLWNvcmUtYWxwaGEnOyAvLyBPYnNlcnZlckFycmF5LCBQYXJzYWJsZVZhbHVlLCBQYXJzZWRWYWx1ZVxuXG5jb25zdCBwYXJzZVJHQiA9IFBhcnNlLnJnYjtcblxuLy8vPGFtZC1tb2R1bGUgbmFtZT1cIk5lcmR5Q29sb3JcIi8+XG5leHBvcnQgbW9kdWxlIE5lcmR5Q29sb3Ige1xuXG4gICAgZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgICAgICAgc3RhdGljIFBhcnNlID0gUGFyc2U7XG4gICAgICAgIHN0YXRpYyBPYnNlcnZhYmxlT2JqZWN0ID0gT2JzZXJ2YWJsZU9iamVjdDtcbiAgICAgICAgc3RhdGljIG9ic2VydmVyc09mID0gT2JlcnNlcnZhYmxlcy5vYnNlcnZlcnNPZjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ29sb3IgZXh0ZW5kcyBPYnNlcnZhYmxlT2JqZWN0IHtcbiAgICAgICAgcHVibGljIGNvbXBvbmVudHM6IFBhcnNlZFZhbHVlW107XG4gICAgICAgIHB1YmxpYyBjb21wb25lbnROYW1lczogc3RyaW5nW107XG4gICAgICAgIHB1YmxpYyBhbHBoYTogbnVtYmVyO1xuICAgICAgICBwdWJsaWMgbW9kZTogc3RyaW5nO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbG9yU3BlY2lmaWNhdGlvbj86IENvbG9yQ29uc3RydWN0b3JQYXJhbWV0ZXJzfHN0cmluZ3x1bmRlZmluZWQpO1xuICAgICAgICBjb25zdHJ1Y3Rvcih7IHIsIGcsIGIsIGFscGhhID0gMS4wLCBjb21wb25lbnRzID0gWzAsIDAsIDBdLCBjb21wb25lbnROYW1lcyA9IFsncicsICdnJywgJ2InXSB9OiBDb2xvckNvbnN0cnVjdG9yUGFyYW1ldGVycyA9IHt9KSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25ldyBOZXJkeUNvbG9yLkNvbG9yJywgeyByLCBnLCBiLCBhbHBoYSwgY29tcG9uZW50cywgY29tcG9uZW50TmFtZXMsIG1vZGU6IChjb21wb25lbnROYW1lcy5sZW5ndGggPyBjb21wb25lbnROYW1lcyA6IGNvbXBvbmVudE5hbWVzID0gKGNvbXBvbmVudE5hbWVzID0gWydyJywgJ2cnLCAnYiddKSkuam9pbihcIlwiKS50b0xvd2VyQ2FzZSgpLCBhcmd1bWVudHMgfSk7XG4gICAgICAgICAgICBjb25zdCBmYWlsID0gKHJlYXNvbiA9ICdDb2xvciBwYXJhbWV0ZXJzIGNhbm5vdCBiZSBwYXJzZWQhJykgPT4geyB0aHJvdyAnQ2Fubm90IGNyZWF0ZSBjb2xvcjogJyArIHJlYXNvbjsgfVxuXG4gICAgICAgICAgICAvLyBQYXJzZSBjb2xvclNwZWNpZmljYXRpb246IHN0cmluZyAoT25seSByZ2IoKSBhbmQgcmdiYSgpIGNzcyBzeW50YXggc3VwcG9ydGVkKVxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGFyZ3VtZW50c1swXSkpIHsgXG4gICAgICAgICAgICAgICAgKChjb2xvclN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVkU3RyaW5nOiBzdHJpbmcsIG1hdGNoZWRDb21wb25lbnRzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgvXFwjWzAtOUEtRl17Myw2fS9pKS50ZXN0KGNvbG9yU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbCgnSGV4IGNvbG9yIHBhcmFtZXRlcnMgY2Fubm90IGJlIHBhcnNlZCB5ZXQhJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKC9yZ2JhP1xccypcXChcXHMqXFxkK1xccypcXCxcXHMqXFxkK1xccypcXCxcXHMqXFxkK1xccypbXFwsXFwpXS8pLnRlc3QoY29sb3JTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbbWF0Y2hlZFN0cmluZ10gPSA8c3RyaW5nW10+Y29sb3JTdHJpbmcubWF0Y2goL3JnYmE/XFxzKlxcKC4qP1xcKS9pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRDb21wb25lbnRzID0gPHN0cmluZ1tdPmNvbG9yU3RyaW5nLm1hdGNoKC9cXGIoWzAxXT9cXC5cXGQrfDF8MHxcXGQrKVxcYi9nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkQ29tcG9uZW50cy5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMgPSBbcGFyc2VSR0IobWF0Y2hlZENvbXBvbmVudHNbMF0pIHx8IDAsIHBhcnNlUkdCKG1hdGNoZWRDb21wb25lbnRzWzFdKSB8fCAwLCBwYXJzZVJHQihtYXRjaGVkQ29tcG9uZW50c1syXSkgfHwgMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZXMgPSBbJ3InLCAnZycsICdiJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZmFpbCgnUkdCIGNvbG9yIHBhcmFtZXRlcnMgY2Fubm90IGJlIHBhcnNlZDogJyArIG1hdGNoZWRTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZWRDb21wb25lbnRzLmxlbmd0aCA+PSA0KSBhbHBoYSA9IE1hdGgubWluKE1hdGgubWF4KDAsIHBhcnNlRmxvYXQobWF0Y2hlZENvbXBvbmVudHNbM10pKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gLy8gb3RoZXIgY2FzZXMgdG8gYmUgYWRkZWQgbGF0ZXJcbiAgICAgICAgICAgICAgICB9KSg8c3RyaW5nPmFyZ3VtZW50c1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIERldGVybWluZSBNb2RlIChPbmx5IHJnYiBzdXBwb3J0ZWQgc28gZmFyKVxuICAgICAgICAgICAgdGhpcy5tb2RlID0gKGNvbXBvbmVudE5hbWVzLmxlbmd0aCA/IGNvbXBvbmVudE5hbWVzIDogY29tcG9uZW50TmFtZXMgPSAoY29tcG9uZW50TmFtZXMgPSBbJ3InLCAnZycsICdiJ10pKS5qb2luKFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlID09PSAncmdiJykgY29tcG9uZW50cyA9IDxudW1iZXJbXT5bIChpc051bWJlcihyKSA/IHIgOiBjb21wb25lbnRzWzBdIHx8IDApLCAoaXNOdW1iZXIoZykgPyBnIDogY29tcG9uZW50c1sxXSB8fCAwKSwgKGlzTnVtYmVyKGIpID8gYiA6IGNvbXBvbmVudHNbMl0gfHwgMCkgXTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHMsIHRoaXMuY29tcG9uZW50TmFtZXMgPSBjb21wb25lbnROYW1lcywgdGhpcy5hbHBoYSA9IGFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0Q29tcG9uZW50KGlkOiBzdHJpbmcgfCBudW1iZXIpOiBQYXJzZWRWYWx1ZSB7XG4gICAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHBhcnNlSW50KCg8c3RyaW5nPmlkKSk7XG4gICAgICAgICAgICBpZiAoaXNOYU4oaW5kZXgpICYmIGlzU3RyaW5nKGlkKSkgaW5kZXggPSAodGhpcy5jb21wb25lbnROYW1lcyB8fCBbJ3InLCAnZycsICdiJ10pLmluZGV4T2YoKDxzdHJpbmc+aWQpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICBnZXRDb21wb25lbnRzKCk6IFBhcnNlZFZhbHVlW10ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIHNldENvbXBvbmVudHMoe3IgPSB0aGlzLmdldENvbXBvbmVudCgncicpLCBnID0gdGhpcy5nZXRDb21wb25lbnQoJ2cnKSwgYiA9IHRoaXMuZ2V0Q29tcG9uZW50KCdiJykgfTogeyByOiBQYXJzYWJsZVZhbHVlLCBnOiBQYXJzYWJsZVZhbHVlLCBiOiBQYXJzYWJsZVZhbHVlIH0pIHtcbiAgICAgICAgICAgIHIgPSBQYXJzZS5yZ2IociksIGcgPSBQYXJzZS5yZ2IoZyksIGIgPSBQYXJzZS5yZ2IoYik7XG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRzWzBdID09PSByICYmIHRoaXMuY29tcG9uZW50c1syXSA9PT0gZyAmJiB0aGlzLmNvbXBvbmVudHNbMV0gPT09IGIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIC8qIENoYW5nZWQgKi8gdGhpcy5jb21wb25lbnRzID0gW3IsIGcsIGJdLCB0aGlzLnB1Ymxpc2godGhpcywgJ2NvbXBvbmVudHMtY2hhbmdlZCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBDb2xvckNvbnN0cnVjdG9yIHtcbiAgICAvLyAgICAgbmV3IChjb2xvclNwZWNpZmljYXRpb24/OiBzdHJpbmd8Q29sb3JDb25zdHJ1Y3RvclBhcmFtZXRlcnMpIDogQ29sb3I7XG4gICAgLy8gfVxufVxuXG4vLyBleHBvcnQgZGVjbGFyZSB0eXBlIE5lcmR5Q29sb3JNb2R1bGUgPSB7XG4vLyAgICAgQ29sb3I6IE5lcmR5Q29sb3IuQ29sb3I7XG4vLyAgICAgVXRpbDogTmVyZHlDb2xvci5VdGlscztcbi8vIH1cblxuLy8gZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIE5lcmR5Q29sb3JNb2R1bGVDb25zdHJ1Y3RvciB7XG4vLyAgICAgQ29sb3I6IE5lcmR5Q29sb3IuQ29sb3I7XG4vLyAgICAgVXRpbDogTmVyZHlDb2xvci5VdGlscztcbi8vIH1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOZXJkeUNvbG9yTW9kdWxlID0geyBDb2xvcjogbmV3IChjb2xvclNwZWNpZmljYXRpb24/OiBDb2xvckNvbnN0cnVjdG9yUGFyYW1ldGVyc3xzdHJpbmd8dW5kZWZpbmVkKSA9PiBOZXJkeUNvbG9yLkNvbG9yLCBVdGlsczogTmVyZHlDb2xvci5VdGlscyB9O1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBOZXJkeUNvbG9yRXhwb3J0cyA9IHsgZGVmYXVsdDpOZXJkeUNvbG9yTW9kdWxlIH07XG5cblxuXG4vLyBleHBvcnQgZGVmYXVsdCBOZXJkeUNvbG9yOyIsIi8vLzxhbWQtbW9kdWxlIG5hbWU9XCJOZXJkeUNvbG9yXCIvPlxuXG5leHBvcnQgKiBmcm9tICcuL25lcmR5LWNvbG9yLWFscGhhJztcbiJdfQ==