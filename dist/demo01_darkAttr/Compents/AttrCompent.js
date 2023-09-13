"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AttrVo_1 = require("../Entity/AttrVo");
var Define_1 = require("../Define");
var BaseCompent_1 = require("./BaseCompent");
var AttrCompent = /** @class */ (function (_super) {
    __extends(AttrCompent, _super);
    function AttrCompent() {
        var _this = _super.call(this) || this;
        _this.objectName = "AttrCompent";
        _this.attrs = new Map();
        _this.Init();
        return _this;
    }
    AttrCompent.prototype.Init = function () {
        this.attrs.set(Define_1.EAttr.ATK, new AttrVo_1.AttrVo());
        this.attrs.set(Define_1.EAttr.DEF, new AttrVo_1.AttrVo());
        this.attrs.set(Define_1.EAttr.EVA, new AttrVo_1.AttrVo());
        this.attrs.set(Define_1.EAttr.HP, new AttrVo_1.AttrVo());
        this.attrs.set(Define_1.EAttr.MP, new AttrVo_1.AttrVo());
    };
    AttrCompent.prototype.GetCompTy = function () {
        return Define_1.EComp.Attr;
    };
    AttrCompent.prototype.GetAttr = function (attr) {
        return this.attrs[attr];
    };
    AttrCompent.prototype.AddAffix = function (affix) {
        var _this = this;
        affix.mods.forEach(function (element) {
            var attr = _this.attrs.get(element.target);
            attr.AddMod(element);
        });
    };
    AttrCompent.prototype.RemoveAffix = function (affix) {
        var _this = this;
        affix.mods.forEach(function (element) {
            var attr = _this.attrs[element.target];
            attr.RemoveMod(element);
        });
    };
    AttrCompent.prototype.AddBinder = function (ea, listener) {
        var attr = this.attrs.get(ea);
        if (attr) {
            attr.AddBinder(listener);
        }
    };
    AttrCompent.prototype.RemoveBinder = function (ea, listener) {
        var attr = this.attrs.get(ea);
        if (attr) {
            attr.removeBinder(listener);
        }
    };
    return AttrCompent;
}(BaseCompent_1.BaseCompent));
exports.AttrCompent = AttrCompent;
//# sourceMappingURL=AttrCompent.js.map