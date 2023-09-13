"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AttrData_1 = require("../Data/AttrData");
var AttrVo = /** @class */ (function () {
    function AttrVo() {
        this.mods = [];
        this.binders = [];
        this.data = new AttrData_1.AttrData();
    }
    AttrVo.prototype.AddMod = function (mod) {
        this.mods.push(mod);
        this.UpdateMod();
    };
    AttrVo.prototype.RemoveMod = function (mod) {
        for (var i = 0; i < this.mods.length; i++) {
            if (this.mods[i] == mod) {
                this.mods.splice(i, 1);
            }
        }
        this.UpdateMod();
    };
    AttrVo.prototype.AddBinder = function (listener) {
        this.binders.push(listener);
    };
    AttrVo.prototype.removeBinder = function (listener) {
        for (var i = 0; i < this.binders.length; i++) {
            if (this.binders[i] == listener) {
                this.binders.splice(i, 1);
            }
        }
    };
    AttrVo.prototype.UpdateMod = function () {
        this.data.Init();
        for (var i = 0; i < this.mods.length; i++) {
            this.mods[i].Modify(this.data);
        }
        this.OnUpdateMod();
    };
    AttrVo.prototype.OnUpdateMod = function () {
        var _this = this;
        this.binders.forEach(function (element) {
            element(_this.data);
        });
    };
    return AttrVo;
}());
exports.AttrVo = AttrVo;
//# sourceMappingURL=AttrVo.js.map