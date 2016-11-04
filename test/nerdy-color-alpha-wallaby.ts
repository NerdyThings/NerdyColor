/// <reference path="../typings/globals/jasmine/index.d.ts"/>

import { NerdyColor } from '../nerdy-color-alpha';

const { Color } = NerdyColor;

const instances = {
    keys: {
        r255: new Color({ r: 255 }),
        g255: new Color({ g: 255 }),
        b255: new Color({ b: 255 }),
        r255g127: new Color({ r: 255, g: 127 }),
        r255g127b0: new Color({ r: 255, g: 127, b: 0 }),
    },
    components: {
        r255: new Color({ components: [255] }),
        g255: new Color({ components: [0, 255] }),
        b255: new Color({ components: [0, 0, 255] }),
        r255g127: new Color({ components: [255, 127] }),
        r255g127b0: new Color({ components: [255, 127, 0] }),
    },
    css: {
        r255: new Color('rgb(255, 0, 0)'),
        g255: new Color('rgb(0, 255, 0)'),
        b255: new Color('rgb(0, 0, 255)'),
        r255g127: new Color('rgb(255, 127, 0)'),
        r255g127b0: new Color('rgb(255, 127, 0)'),
    },
    default: new Color()
};


describe('nerdy-color-alpha color', () => {

    describe('constructor default', () => {
        it('default components expected to [0, 0, 0]', () => { expect(instances.default.components).toEqual([0, 0, 0]); });
        it('default componentNames expected to ["r", "g", "b"]', () => { expect(instances.default.componentNames).toEqual(["r", "g", "b"]); });
    });

    describe('constructor keys', () => {
        it('keys.r255 components expected to [255, 0, 0]', () => { expect(instances.keys.r255.components).toEqual([255, 0, 0]); });
        it('keys.g255 components expected to [0, 255, 0]', () => { expect(instances.keys.g255.components).toEqual([0, 255, 0]); });
        it('keys.b255 components expected to [0, 0, 255]', () => { expect(instances.keys.b255.components).toEqual([0, 0, 255]); });
        it('keys.r255g127b0 components expected to [255, 127, 0]', () => { expect(instances.keys.r255g127b0.components).toEqual([255, 127, 0]); });
        it('keys.r255 componentNames expected to ["r", "g", "b"]', () => { expect(instances.keys.r255.componentNames).toEqual(["r", "g", "b"]); });
        it('keys.g255 componentNames expected to ["r", "g", "b"]', () => { expect(instances.keys.g255.componentNames).toEqual(["r", "g", "b"]); });
        it('keys.b255 componentNames expected to ["r", "g", "b"]', () => { expect(instances.keys.b255.componentNames).toEqual(["r", "g", "b"]); });
        it('keys.r255g127b0 componentNames expected to ["r", "g", "b"]', () => { expect(instances.keys.r255g127b0.componentNames).toEqual(["r", "g", "b"]); });
    });

    describe('constructor components', () => {
        it('components.r255 components expected to [255, 0, 0]', () => { expect(instances.components.r255.components).toEqual([255, 0, 0]); });
        it('components.g255 components expected to [0, 255, 0]', () => { expect(instances.components.g255.components).toEqual([0, 255, 0]); });
        it('components.b255 components expected to [0, 0, 255]', () => { expect(instances.components.b255.components).toEqual([0, 0, 255]); });
        it('components.r255g127b0 components expected to [255, 127, 0]', () => { expect(instances.components.r255g127b0.components).toEqual([255, 127, 0]); });
        it('components.r255 componentNames expected to ["r", "g", "b"]', () => { expect(instances.components.r255.componentNames).toEqual(["r", "g", "b"]); });
        it('components.g255 componentNames expected to ["r", "g", "b"]', () => { expect(instances.components.g255.componentNames).toEqual(["r", "g", "b"]); });
        it('components.b255 componentNames expected to ["r", "g", "b"]', () => { expect(instances.components.b255.componentNames).toEqual(["r", "g", "b"]); });
        it('components.r255g127b0 componentNames expected to ["r", "g", "b"]', () => { expect(instances.components.r255g127b0.componentNames).toEqual(["r", "g", "b"]); });
    });

    describe('constructor css', () => {
        it('css.r255 components expected to [255, 0, 0]', () => { expect(instances.css.r255.components).toEqual([255, 0, 0]); });
        it('css.g255 components expected to [0, 255, 0]', () => { expect(instances.css.g255.components).toEqual([0, 255, 0]); });
        it('css.b255 components expected to [0, 0, 255]', () => { expect(instances.css.b255.components).toEqual([0, 0, 255]); });
        it('css.r255g127b0 components expected to [255, 127, 0]', () => { expect(instances.css.r255g127b0.components).toEqual([255, 127, 0]); });
        it('css.r255 componentNames expected to ["r", "g", "b"]', () => { expect(instances.css.r255.componentNames).toEqual(["r", "g", "b"]); });
        it('css.g255 componentNames expected to ["r", "g", "b"]', () => { expect(instances.css.g255.componentNames).toEqual(["r", "g", "b"]); });
        it('css.b255 componentNames expected to ["r", "g", "b"]', () => { expect(instances.css.b255.componentNames).toEqual(["r", "g", "b"]); });
        it('css.r255g127b0 componentNames expected to ["r", "g", "b"]', () => { expect(instances.css.r255g127b0.componentNames).toEqual(["r", "g", "b"]); });
    });

});