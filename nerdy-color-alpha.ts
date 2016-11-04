/// <reference path="types.d.ts" />
import { isString, isNumber, isFunction, ObservableObject, observersOf, OBSERVERS, Parse, Oberservables } from './nerdy-color-core-alpha'; // ObserverArray, ParsableValue, ParsedValue

const parseRGB = Parse.rgb;

///<amd-module name="NerdyColor"/>
export module NerdyColor {

    export class Utils {
        static Parse = Parse;
        static ObservableObject = ObservableObject;
        static observersOf = Oberservables.observersOf;
    }

    export class Color extends ObservableObject {
        public components: ParsedValue[];
        public componentNames: string[];
        public alpha: number;
        public mode: string;

        constructor(colorSpecification?: ColorConstructorParameters|string|undefined);
        constructor({ r, g, b, alpha = 1.0, components = [0, 0, 0], componentNames = ['r', 'g', 'b'] }: ColorConstructorParameters = {}) {
            super();
            // console.log('new NerdyColor.Color', { r, g, b, alpha, components, componentNames, mode: (componentNames.length ? componentNames : componentNames = (componentNames = ['r', 'g', 'b'])).join("").toLowerCase(), arguments });
            const fail = (reason = 'Color parameters cannot be parsed!') => { throw 'Cannot create color: ' + reason; }

            // Parse colorSpecification: string (Only rgb() and rgba() css syntax supported)
            if (isString(arguments[0])) { 
                ((colorString: string) => {
                    var matchedString: string, matchedComponents: string[];
                    if ((/\#[0-9A-F]{3,6}/i).test(colorString)) {
                        fail('Hex color parameters cannot be parsed yet!');
                    } else if ((/rgba?\s*\(\s*\d+\s*\,\s*\d+\s*\,\s*\d+\s*[\,\)]/).test(colorString)) {
                        [matchedString] = <string[]>colorString.match(/rgba?\s*\(.*?\)/i);
                        matchedComponents = <string[]>colorString.match(/\b([01]?\.\d+|1|0|\d+)\b/g);
                        if (matchedComponents.length >= 3) {
                            components = [parseRGB(matchedComponents[0]) || 0, parseRGB(matchedComponents[1]) || 0, parseRGB(matchedComponents[2]) || 0];
                            componentNames = ['r', 'g', 'b'];
                        } else fail('RGB color parameters cannot be parsed: ' + matchedString);
                        if (matchedComponents.length >= 4) alpha = Math.min(Math.max(0, parseFloat(matchedComponents[3])), 1);
                    } // other cases to be added later
                })(<string>arguments[0]);
            }
            
            // Determine Mode (Only rgb supported so far)
            this.mode = (componentNames.length ? componentNames : componentNames = (componentNames = ['r', 'g', 'b'])).join("").toLowerCase();
            if (this.mode === 'rgb') components = <number[]>[ (isNumber(r) ? r : components[0] || 0), (isNumber(g) ? g : components[1] || 0), (isNumber(b) ? b : components[2] || 0) ];
            this.components = components, this.componentNames = componentNames, this.alpha = alpha;
        }

        getComponent(id: string | number): ParsedValue {
            let index: number = parseInt((<string>id));
            if (isNaN(index) && isString(id)) index = (this.componentNames || ['r', 'g', 'b']).indexOf((<string>id).toLowerCase());
            return this.components[index];
        }

        getComponents(): ParsedValue[] {
            return this.components;
        }

        setComponents({r = this.getComponent('r'), g = this.getComponent('g'), b = this.getComponent('b') }: { r: ParsableValue, g: ParsableValue, b: ParsableValue }) {
            r = Parse.rgb(r), g = Parse.rgb(g), b = Parse.rgb(b);
            if (this.components[0] === r && this.components[2] === g && this.components[1] === b) return false;
            /* Changed */ this.components = [r, g, b], this.publish(this, 'components-changed');
            return true;
        }

    }

    // export declare interface ColorConstructor {
    //     new (colorSpecification?: string|ColorConstructorParameters) : Color;
    // }
}

// export declare type NerdyColorModule = {
//     Color: NerdyColor.Color;
//     Util: NerdyColor.Utils;
// }

// export declare interface NerdyColorModuleConstructor {
//     Color: NerdyColor.Color;
//     Util: NerdyColor.Utils;
// }

export declare type NerdyColorModule = { Color: new (colorSpecification?: ColorConstructorParameters|string|undefined) => NerdyColor.Color, Utils: NerdyColor.Utils };
export declare type NerdyColorExports = { default:NerdyColorModule };



// export default NerdyColor;