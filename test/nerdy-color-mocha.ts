import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect, assert, should, use, config, } from 'chai';
import { NerdyColor } from '../nerdy-color-alpha';

const instances = {
    keys: {
        r255: new NerdyColor.Color({ r: 255 }),
        g255: new NerdyColor.Color({ g: 255 }),
        b255: new NerdyColor.Color({ b: 255 }),
        r255g127: new NerdyColor.Color({ r: 255, g: 127 }),
        r255g127b0: new NerdyColor.Color({ r: 255, g: 127, b: 0 }),
    },
    components: {
        r255: new NerdyColor.Color({ components: [255] }),
        g255: new NerdyColor.Color({ components: [0, 255] }),
        b255: new NerdyColor.Color({ components: [0, 0, 255] }),
        r255g127: new NerdyColor.Color({ components: [255, 127] }),
        r255g127b0: new NerdyColor.Color({ components: [255, 127, 0] }),
    },
    css: {
        r255: new NerdyColor.Color('rgb(255, 0, 0)'),
        g255: new NerdyColor.Color('rgb(0, 255, 0)'),
        b255: new NerdyColor.Color('rgb(0, 0, 255)'),
        r255g127: new NerdyColor.Color('rgb(255, 127, 0)'),
        r255g127b0: new NerdyColor.Color('rgb(255, 127, 0)'),
    },
    default: new NerdyColor.Color()
};

describe("nerdy-color-alpha color", () => {
    describe("constructor-components", () => {
        @suite("default")
        class ColorDefault {
            instance = instances.default;
            @test "should have [0, 0, 0] as components for default"() { expect(this.instance.components).to.eql([0, 0, 0]); }
        }

        @suite("keys")
        class ColorKeys {
            instances = instances.keys;
            @test "should have [255, 0, 0] as components for keys/r255"() { expect(this.instances.r255.components).to.eql([255, 0, 0]); }
            @test "should have [0, 255, 0] as components for keys/g255"() { expect(this.instances.g255.components).to.eql([0, 255, 0]); }
            @test "should have [0, 0, 255] as components for keys/b255"() { expect(this.instances.b255.components).to.eql([0, 0, 255]); }
            @test "should have [255, 127, 0] as components for keys/r255g127b0"() { expect(this.instances.r255g127b0.components).to.eql([255, 127, 0]); }
        }

        @suite("components")
        class ColorComponents {
            instances = instances.components;
            @test "should have [255, 0, 0] as components for components/r255"() { expect(this.instances.r255.components).to.eql([255, 0, 0]); }
            @test "should have [0, 255, 0] as components for components/g255"() { expect(this.instances.g255.components).to.eql([0, 255, 0]); }
            @test "should have [0, 0, 255] as components for components/b255"() { expect(this.instances.b255.components).to.eql([0, 0, 255]); }
            @test "should have [255, 127, 0] as components for components/r255g127b0"() { expect(this.instances.r255g127b0.components).to.eql([255, 127, 0]); }
        }

        @suite("css")
        class ColorCSS {
            instances = instances.css;
            @test "should have [255, 0, 0] as components for css/r255"() { expect(this.instances.r255.components).to.eql([255, 0, 0]); }
            @test "should have [0, 255, 0] as components for css/g255"() { expect(this.instances.g255.components).to.eql([0, 255, 0]); }
            @test "should have [0, 0, 255] as components for css/b255"() { expect(this.instances.b255.components).to.eql([0, 0, 255]); }
            @test "should have [255, 127, 0] as components for css/r255g127b0"() { expect(this.instances.r255g127b0.components).to.eql([255, 127, 0]); }
        }

    });
    describe("constructor-componentNames", () => {

        @suite("default")
        class ColorDefault {
            instance = instances.default;
            @test "should have ['r', 'g', 'b'] as componentNames for default"() { expect(this.instance.componentNames).to.eql(['r', 'g', 'b']); }
        }

        @suite("keys")
        class ColorKeys {
            instance = instances.keys.r255g127b0;
            @test "should have ['r', 'g', 'b'] as componentNames for keys/r255g127b0"() { expect(this.instance.componentNames).to.eql(['r', 'g', 'b']); }
        }

        @suite("components")
        class ColorComponents {
            instance = instances.keys.r255g127b0;
            @test "should have ['r', 'g', 'b'] as componentNames for components/r255g127b0"() { expect(this.instance.componentNames).to.eql(['r', 'g', 'b']); }
        }

        @suite("css")
        class ColorCSS {
            instance = instances.css.r255g127b0;
            @test "should have ['r', 'g', 'b'] as componentNames for css/r255g127b0"() { expect(this.instance.componentNames).to.eql(['r', 'g', 'b']); }
        }
    });
});