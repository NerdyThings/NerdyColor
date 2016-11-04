"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const mocha_typescript_1 = require("mocha-typescript");
const chai_1 = require("chai");
const nerdy_color_alpha_1 = require("../nerdy-color-alpha");
const instances = {
    keys: {
        r255: new nerdy_color_alpha_1.NerdyColor.Color({ r: 255 }),
        g255: new nerdy_color_alpha_1.NerdyColor.Color({ g: 255 }),
        b255: new nerdy_color_alpha_1.NerdyColor.Color({ b: 255 }),
        r255g127: new nerdy_color_alpha_1.NerdyColor.Color({ r: 255, g: 127 }),
        r255g127b0: new nerdy_color_alpha_1.NerdyColor.Color({ r: 255, g: 127, b: 0 }),
    },
    components: {
        r255: new nerdy_color_alpha_1.NerdyColor.Color({ components: [255] }),
        g255: new nerdy_color_alpha_1.NerdyColor.Color({ components: [0, 255] }),
        b255: new nerdy_color_alpha_1.NerdyColor.Color({ components: [0, 0, 255] }),
        r255g127: new nerdy_color_alpha_1.NerdyColor.Color({ components: [255, 127] }),
        r255g127b0: new nerdy_color_alpha_1.NerdyColor.Color({ components: [255, 127, 0] }),
    },
    css: {
        r255: new nerdy_color_alpha_1.NerdyColor.Color('rgb(255, 0, 0)'),
        g255: new nerdy_color_alpha_1.NerdyColor.Color('rgb(0, 255, 0)'),
        b255: new nerdy_color_alpha_1.NerdyColor.Color('rgb(0, 0, 255)'),
        r255g127: new nerdy_color_alpha_1.NerdyColor.Color('rgb(255, 127, 0)'),
        r255g127b0: new nerdy_color_alpha_1.NerdyColor.Color('rgb(255, 127, 0)'),
    },
    default: new nerdy_color_alpha_1.NerdyColor.Color()
};
describe("nerdy-color-alpha color", () => {
    describe("constructor-components", () => {
        let ColorDefault = class ColorDefault {
            constructor() {
                this.instance = instances.default;
            }
            "should have [0, 0, 0] as components for default"() { chai_1.expect(this.instance.components).to.eql([0, 0, 0]); }
        };
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorDefault.prototype, "should have [0, 0, 0] as components for default", null);
        ColorDefault = __decorate([
            mocha_typescript_1.suite("default"),
            __metadata("design:paramtypes", [])
        ], ColorDefault);
        let ColorKeys = class ColorKeys {
            constructor() {
                this.instances = instances.keys;
            }
            "should have [255, 0, 0] as components for keys/r255"() { chai_1.expect(this.instances.r255.components).to.eql([255, 0, 0]); }
            "should have [0, 255, 0] as components for keys/g255"() { chai_1.expect(this.instances.g255.components).to.eql([0, 255, 0]); }
            "should have [0, 0, 255] as components for keys/b255"() { chai_1.expect(this.instances.b255.components).to.eql([0, 0, 255]); }
            "should have [255, 127, 0] as components for keys/r255g127b0"() { chai_1.expect(this.instances.r255g127b0.components).to.eql([255, 127, 0]); }
        };
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorKeys.prototype, "should have [255, 0, 0] as components for keys/r255", null);
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorKeys.prototype, "should have [0, 255, 0] as components for keys/g255", null);
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorKeys.prototype, "should have [0, 0, 255] as components for keys/b255", null);
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorKeys.prototype, "should have [255, 127, 0] as components for keys/r255g127b0", null);
        ColorKeys = __decorate([
            mocha_typescript_1.suite("keys"),
            __metadata("design:paramtypes", [])
        ], ColorKeys);
        let ColorComponents = class ColorComponents {
            constructor() {
                this.instances = instances.components;
            }
            "should have [255, 0, 0] as components for components/r255"() { chai_1.expect(this.instances.r255.components).to.eql([255, 0, 0]); }
            "should have [0, 255, 0] as components for components/g255"() { chai_1.expect(this.instances.g255.components).to.eql([0, 255, 0]); }
            "should have [0, 0, 255] as components for components/b255"() { chai_1.expect(this.instances.b255.components).to.eql([0, 0, 255]); }
            "should have [255, 127, 0] as components for components/r255g127b0"() { chai_1.expect(this.instances.r255g127b0.components).to.eql([255, 127, 0]); }
        };
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorComponents.prototype, "should have [255, 0, 0] as components for components/r255", null);
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorComponents.prototype, "should have [0, 255, 0] as components for components/g255", null);
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorComponents.prototype, "should have [0, 0, 255] as components for components/b255", null);
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorComponents.prototype, "should have [255, 127, 0] as components for components/r255g127b0", null);
        ColorComponents = __decorate([
            mocha_typescript_1.suite("components"),
            __metadata("design:paramtypes", [])
        ], ColorComponents);
        let ColorCSS = class ColorCSS {
            constructor() {
                this.instances = instances.css;
            }
            "should have [255, 0, 0] as components for css/r255"() { chai_1.expect(this.instances.r255.components).to.eql([255, 0, 0]); }
            "should have [0, 255, 0] as components for css/g255"() { chai_1.expect(this.instances.g255.components).to.eql([0, 255, 0]); }
            "should have [0, 0, 255] as components for css/b255"() { chai_1.expect(this.instances.b255.components).to.eql([0, 0, 255]); }
            "should have [255, 127, 0] as components for css/r255g127b0"() { chai_1.expect(this.instances.r255g127b0.components).to.eql([255, 127, 0]); }
        };
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorCSS.prototype, "should have [255, 0, 0] as components for css/r255", null);
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorCSS.prototype, "should have [0, 255, 0] as components for css/g255", null);
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorCSS.prototype, "should have [0, 0, 255] as components for css/b255", null);
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorCSS.prototype, "should have [255, 127, 0] as components for css/r255g127b0", null);
        ColorCSS = __decorate([
            mocha_typescript_1.suite("css"),
            __metadata("design:paramtypes", [])
        ], ColorCSS);
    });
    describe("constructor-componentNames", () => {
        let ColorDefault = class ColorDefault {
            constructor() {
                this.instance = instances.default;
            }
            "should have ['r', 'g', 'b'] as componentNames for default"() { chai_1.expect(this.instance.componentNames).to.eql(['r', 'g', 'b']); }
        };
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorDefault.prototype, "should have ['r', 'g', 'b'] as componentNames for default", null);
        ColorDefault = __decorate([
            mocha_typescript_1.suite("default"),
            __metadata("design:paramtypes", [])
        ], ColorDefault);
        let ColorKeys = class ColorKeys {
            constructor() {
                this.instance = instances.keys.r255g127b0;
            }
            "should have ['r', 'g', 'b'] as componentNames for keys/r255g127b0"() { chai_1.expect(this.instance.componentNames).to.eql(['r', 'g', 'b']); }
        };
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorKeys.prototype, "should have ['r', 'g', 'b'] as componentNames for keys/r255g127b0", null);
        ColorKeys = __decorate([
            mocha_typescript_1.suite("keys"),
            __metadata("design:paramtypes", [])
        ], ColorKeys);
        let ColorComponents = class ColorComponents {
            constructor() {
                this.instance = instances.keys.r255g127b0;
            }
            "should have ['r', 'g', 'b'] as componentNames for components/r255g127b0"() { chai_1.expect(this.instance.componentNames).to.eql(['r', 'g', 'b']); }
        };
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorComponents.prototype, "should have ['r', 'g', 'b'] as componentNames for components/r255g127b0", null);
        ColorComponents = __decorate([
            mocha_typescript_1.suite("components"),
            __metadata("design:paramtypes", [])
        ], ColorComponents);
        let ColorCSS = class ColorCSS {
            constructor() {
                this.instance = instances.css.r255g127b0;
            }
            "should have ['r', 'g', 'b'] as componentNames for css/r255g127b0"() { chai_1.expect(this.instance.componentNames).to.eql(['r', 'g', 'b']); }
        };
        __decorate([
            mocha_typescript_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ColorCSS.prototype, "should have ['r', 'g', 'b'] as componentNames for css/r255g127b0", null);
        ColorCSS = __decorate([
            mocha_typescript_1.suite("css"),
            __metadata("design:paramtypes", [])
        ], ColorCSS);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVyZHktY29sb3ItbW9jaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXJkeS1jb2xvci1tb2NoYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdURBQTBFO0FBQzFFLCtCQUE0RDtBQUM1RCw0REFBa0Q7QUFFbEQsTUFBTSxTQUFTLEdBQUc7SUFDZCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsSUFBSSw4QkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN0QyxJQUFJLEVBQUUsSUFBSSw4QkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN0QyxJQUFJLEVBQUUsSUFBSSw4QkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN0QyxRQUFRLEVBQUUsSUFBSSw4QkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2xELFVBQVUsRUFBRSxJQUFJLDhCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztLQUM3RDtJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxJQUFJLDhCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNqRCxJQUFJLEVBQUUsSUFBSSw4QkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3BELElBQUksRUFBRSxJQUFJLDhCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFH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LElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0ksQ0FBQTtRQURTO1lBQUwsdUJBQUk7Ozs7d0dBQXVJO1FBRjFJLFFBQVE7WUFEYix3QkFBSyxDQUFDLEtBQUssQ0FBQzs7V0FDUCxRQUFRLENBR2I7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VpdGUsIHRlc3QsIHNsb3csIHRpbWVvdXQsIHNraXAsIG9ubHkgfSBmcm9tICdtb2NoYS10eXBlc2NyaXB0JztcbmltcG9ydCB7IGV4cGVjdCwgYXNzZXJ0LCBzaG91bGQsIHVzZSwgY29uZmlnLCB9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHsgTmVyZHlDb2xvciB9IGZyb20gJy4uL25lcmR5LWNvbG9yLWFscGhhJztcblxuY29uc3QgaW5zdGFuY2VzID0ge1xuICAgIGtleXM6IHtcbiAgICAgICAgcjI1NTogbmV3IE5lcmR5Q29sb3IuQ29sb3IoeyByOiAyNTUgfSksXG4gICAgICAgIGcyNTU6IG5ldyBOZXJkeUNvbG9yLkNvbG9yKHsgZzogMjU1IH0pLFxuICAgICAgICBiMjU1OiBuZXcgTmVyZHlDb2xvci5Db2xvcih7IGI6IDI1NSB9KSxcbiAgICAgICAgcjI1NWcxMjc6IG5ldyBOZXJkeUNvbG9yLkNvbG9yKHsgcjogMjU1LCBnOiAxMjcgfSksXG4gICAgICAgIHIyNTVnMTI3YjA6IG5ldyBOZXJkeUNvbG9yLkNvbG9yKHsgcjogMjU1LCBnOiAxMjcsIGI6IDAgfSksXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIHIyNTU6IG5ldyBOZXJkeUNvbG9yLkNvbG9yKHsgY29tcG9uZW50czogWzI1NV0gfSksXG4gICAgICAgIGcyNTU6IG5ldyBOZXJkeUNvbG9yLkNvbG9yKHsgY29tcG9uZW50czogWzAsIDI1NV0gfSksXG4gICAgICAgIGIyNTU6IG5ldyBOZXJkeUNvbG9yLkNvbG9yKHsgY29tcG9uZW50czogWzAsIDAsIDI1NV0gfSksXG4gICAgICAgIHIyNTVnMTI3OiBuZXcgTmVyZHlDb2xvci5Db2xvcih7IGNvbXBvbmVudHM6IFsyNTUsIDEyN10gfSksXG4gICAgICAgIHIyNTVnMTI3YjA6IG5ldyBOZXJkeUNvbG9yLkNvbG9yKHsgY29tcG9uZW50czogWzI1NSwgMTI3LCAwXSB9KSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgICByMjU1OiBuZXcgTmVyZHlDb2xvci5Db2xvcigncmdiKDI1NSwgMCwgMCknKSxcbiAgICAgICAgZzI1NTogbmV3IE5lcmR5Q29sb3IuQ29sb3IoJ3JnYigwLCAyNTUsIDApJyksXG4gICAgICAgIGIyNTU6IG5ldyBOZXJkeUNvbG9yLkNvbG9yKCdyZ2IoMCwgMCwgMjU1KScpLFxuICAgICAgICByMjU1ZzEyNzogbmV3IE5lcmR5Q29sb3IuQ29sb3IoJ3JnYigyNTUsIDEyNywgMCknKSxcbiAgICAgICAgcjI1NWcxMjdiMDogbmV3IE5lcmR5Q29sb3IuQ29sb3IoJ3JnYigyNTUsIDEyNywgMCknKSxcbiAgICB9LFxuICAgIGRlZmF1bHQ6IG5ldyBOZXJkeUNvbG9yLkNvbG9yKClcbn07XG5cbmRlc2NyaWJlKFwibmVyZHktY29sb3ItYWxwaGEgY29sb3JcIiwgKCkgPT4ge1xuICAgIGRlc2NyaWJlKFwiY29uc3RydWN0b3ItY29tcG9uZW50c1wiLCAoKSA9PiB7XG4gICAgICAgIEBzdWl0ZShcImRlZmF1bHRcIilcbiAgICAgICAgY2xhc3MgQ29sb3JEZWZhdWx0IHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gaW5zdGFuY2VzLmRlZmF1bHQ7XG4gICAgICAgICAgICBAdGVzdCBcInNob3VsZCBoYXZlIFswLCAwLCAwXSBhcyBjb21wb25lbnRzIGZvciBkZWZhdWx0XCIoKSB7IGV4cGVjdCh0aGlzLmluc3RhbmNlLmNvbXBvbmVudHMpLnRvLmVxbChbMCwgMCwgMF0pOyB9XG4gICAgICAgIH1cblxuICAgICAgICBAc3VpdGUoXCJrZXlzXCIpXG4gICAgICAgIGNsYXNzIENvbG9yS2V5cyB7XG4gICAgICAgICAgICBpbnN0YW5jZXMgPSBpbnN0YW5jZXMua2V5cztcbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWzI1NSwgMCwgMF0gYXMgY29tcG9uZW50cyBmb3Iga2V5cy9yMjU1XCIoKSB7IGV4cGVjdCh0aGlzLmluc3RhbmNlcy5yMjU1LmNvbXBvbmVudHMpLnRvLmVxbChbMjU1LCAwLCAwXSk7IH1cbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWzAsIDI1NSwgMF0gYXMgY29tcG9uZW50cyBmb3Iga2V5cy9nMjU1XCIoKSB7IGV4cGVjdCh0aGlzLmluc3RhbmNlcy5nMjU1LmNvbXBvbmVudHMpLnRvLmVxbChbMCwgMjU1LCAwXSk7IH1cbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWzAsIDAsIDI1NV0gYXMgY29tcG9uZW50cyBmb3Iga2V5cy9iMjU1XCIoKSB7IGV4cGVjdCh0aGlzLmluc3RhbmNlcy5iMjU1LmNvbXBvbmVudHMpLnRvLmVxbChbMCwgMCwgMjU1XSk7IH1cbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWzI1NSwgMTI3LCAwXSBhcyBjb21wb25lbnRzIGZvciBrZXlzL3IyNTVnMTI3YjBcIigpIHsgZXhwZWN0KHRoaXMuaW5zdGFuY2VzLnIyNTVnMTI3YjAuY29tcG9uZW50cykudG8uZXFsKFsyNTUsIDEyNywgMF0pOyB9XG4gICAgICAgIH1cblxuICAgICAgICBAc3VpdGUoXCJjb21wb25lbnRzXCIpXG4gICAgICAgIGNsYXNzIENvbG9yQ29tcG9uZW50cyB7XG4gICAgICAgICAgICBpbnN0YW5jZXMgPSBpbnN0YW5jZXMuY29tcG9uZW50cztcbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWzI1NSwgMCwgMF0gYXMgY29tcG9uZW50cyBmb3IgY29tcG9uZW50cy9yMjU1XCIoKSB7IGV4cGVjdCh0aGlzLmluc3RhbmNlcy5yMjU1LmNvbXBvbmVudHMpLnRvLmVxbChbMjU1LCAwLCAwXSk7IH1cbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWzAsIDI1NSwgMF0gYXMgY29tcG9uZW50cyBmb3IgY29tcG9uZW50cy9nMjU1XCIoKSB7IGV4cGVjdCh0aGlzLmluc3RhbmNlcy5nMjU1LmNvbXBvbmVudHMpLnRvLmVxbChbMCwgMjU1LCAwXSk7IH1cbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWzAsIDAsIDI1NV0gYXMgY29tcG9uZW50cyBmb3IgY29tcG9uZW50cy9iMjU1XCIoKSB7IGV4cGVjdCh0aGlzLmluc3RhbmNlcy5iMjU1LmNvbXBvbmVudHMpLnRvLmVxbChbMCwgMCwgMjU1XSk7IH1cbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWzI1NSwgMTI3LCAwXSBhcyBjb21wb25lbnRzIGZvciBjb21wb25lbnRzL3IyNTVnMTI3YjBcIigpIHsgZXhwZWN0KHRoaXMuaW5zdGFuY2VzLnIyNTVnMTI3YjAuY29tcG9uZW50cykudG8uZXFsKFsyNTUsIDEyNywgMF0pOyB9XG4gICAgICAgIH1cblxuICAgICAgICBAc3VpdGUoXCJjc3NcIilcbiAgICAgICAgY2xhc3MgQ29sb3JDU1Mge1xuICAgICAgICAgICAgaW5zdGFuY2VzID0gaW5zdGFuY2VzLmNzcztcbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWzI1NSwgMCwgMF0gYXMgY29tcG9uZW50cyBmb3IgY3NzL3IyNTVcIigpIHsgZXhwZWN0KHRoaXMuaW5zdGFuY2VzLnIyNTUuY29tcG9uZW50cykudG8uZXFsKFsyNTUsIDAsIDBdKTsgfVxuICAgICAgICAgICAgQHRlc3QgXCJzaG91bGQgaGF2ZSBbMCwgMjU1LCAwXSBhcyBjb21wb25lbnRzIGZvciBjc3MvZzI1NVwiKCkgeyBleHBlY3QodGhpcy5pbnN0YW5jZXMuZzI1NS5jb21wb25lbnRzKS50by5lcWwoWzAsIDI1NSwgMF0pOyB9XG4gICAgICAgICAgICBAdGVzdCBcInNob3VsZCBoYXZlIFswLCAwLCAyNTVdIGFzIGNvbXBvbmVudHMgZm9yIGNzcy9iMjU1XCIoKSB7IGV4cGVjdCh0aGlzLmluc3RhbmNlcy5iMjU1LmNvbXBvbmVudHMpLnRvLmVxbChbMCwgMCwgMjU1XSk7IH1cbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWzI1NSwgMTI3LCAwXSBhcyBjb21wb25lbnRzIGZvciBjc3MvcjI1NWcxMjdiMFwiKCkgeyBleHBlY3QodGhpcy5pbnN0YW5jZXMucjI1NWcxMjdiMC5jb21wb25lbnRzKS50by5lcWwoWzI1NSwgMTI3LCAwXSk7IH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCJjb25zdHJ1Y3Rvci1jb21wb25lbnROYW1lc1wiLCAoKSA9PiB7XG5cbiAgICAgICAgQHN1aXRlKFwiZGVmYXVsdFwiKVxuICAgICAgICBjbGFzcyBDb2xvckRlZmF1bHQge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBpbnN0YW5jZXMuZGVmYXVsdDtcbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWydyJywgJ2cnLCAnYiddIGFzIGNvbXBvbmVudE5hbWVzIGZvciBkZWZhdWx0XCIoKSB7IGV4cGVjdCh0aGlzLmluc3RhbmNlLmNvbXBvbmVudE5hbWVzKS50by5lcWwoWydyJywgJ2cnLCAnYiddKTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgQHN1aXRlKFwia2V5c1wiKVxuICAgICAgICBjbGFzcyBDb2xvcktleXMge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBpbnN0YW5jZXMua2V5cy5yMjU1ZzEyN2IwO1xuICAgICAgICAgICAgQHRlc3QgXCJzaG91bGQgaGF2ZSBbJ3InLCAnZycsICdiJ10gYXMgY29tcG9uZW50TmFtZXMgZm9yIGtleXMvcjI1NWcxMjdiMFwiKCkgeyBleHBlY3QodGhpcy5pbnN0YW5jZS5jb21wb25lbnROYW1lcykudG8uZXFsKFsncicsICdnJywgJ2InXSk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBzdWl0ZShcImNvbXBvbmVudHNcIilcbiAgICAgICAgY2xhc3MgQ29sb3JDb21wb25lbnRzIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gaW5zdGFuY2VzLmtleXMucjI1NWcxMjdiMDtcbiAgICAgICAgICAgIEB0ZXN0IFwic2hvdWxkIGhhdmUgWydyJywgJ2cnLCAnYiddIGFzIGNvbXBvbmVudE5hbWVzIGZvciBjb21wb25lbnRzL3IyNTVnMTI3YjBcIigpIHsgZXhwZWN0KHRoaXMuaW5zdGFuY2UuY29tcG9uZW50TmFtZXMpLnRvLmVxbChbJ3InLCAnZycsICdiJ10pOyB9XG4gICAgICAgIH1cblxuICAgICAgICBAc3VpdGUoXCJjc3NcIilcbiAgICAgICAgY2xhc3MgQ29sb3JDU1Mge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBpbnN0YW5jZXMuY3NzLnIyNTVnMTI3YjA7XG4gICAgICAgICAgICBAdGVzdCBcInNob3VsZCBoYXZlIFsncicsICdnJywgJ2InXSBhcyBjb21wb25lbnROYW1lcyBmb3IgY3NzL3IyNTVnMTI3YjBcIigpIHsgZXhwZWN0KHRoaXMuaW5zdGFuY2UuY29tcG9uZW50TmFtZXMpLnRvLmVxbChbJ3InLCAnZycsICdiJ10pOyB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyJdfQ==