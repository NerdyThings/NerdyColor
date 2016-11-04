/// <reference path="types.d.ts" />
import { ObservableObject, Parse, Oberservables } from './nerdy-color-core-alpha';
export declare module NerdyColor {
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
export declare type NerdyColorModule = {
    Color: new (colorSpecification?: ColorConstructorParameters | string | undefined) => NerdyColor.Color;
    Utils: NerdyColor.Utils;
};
export declare type NerdyColorExports = {
    default: NerdyColorModule;
};
