"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Define_1 = require("../Define");
var EventDelegate_1 = require("../Event/EventDelegate");
var BaseCompent = /** @class */ (function () {
    function BaseCompent() {
        this.affixs = [];
        this.objectName = "BaseCompent";
        this.eventDelegate = undefined;
        this.eventDelegate = new EventDelegate_1.EventDelegate();
    }
    BaseCompent.prototype.AddAffix = function (affix) {
        throw new Error("Method not implemented.");
    };
    BaseCompent.prototype.RemoveAffix = function (affix) {
        throw new Error("Method not implemented.");
    };
    BaseCompent.prototype.GetCompTy = function () {
        return Define_1.EComp.None;
    };
    BaseCompent.prototype.addListener = function (event, listener) {
        this.eventDelegate.addEventListener(event, listener);
    };
    BaseCompent.prototype.removeListener = function (event, listener) {
        this.eventDelegate.removeEventListener(event, listener);
    };
    return BaseCompent;
}());
exports.BaseCompent = BaseCompent;
//# sourceMappingURL=BaseCompent.js.map