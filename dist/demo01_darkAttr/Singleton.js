"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.Put = function (arg, value) {
        this._dict.set(arg, value);
        return value;
    };
    Singleton.Destroy = function (arg) {
        if (this._dict) {
            this._dict.delete(arg);
        }
    };
    Singleton.Clear = function () {
        if (this._dict) {
            this._dict.forEach(this.clearAll, this);
        }
    };
    Singleton.clearAll = function (value) {
        if (value.clear) {
            value.clear();
        }
    };
    Singleton.DestroyAll = function () {
        if (this._dict) {
            this._dict.clear();
        }
    };
    Singleton.ContainInstance = function (arg) {
        var value = this._dict.get(arg);
        if (value) {
            return true;
        }
        return false;
    };
    Singleton.GetInstance = function (arg) {
        var value = this._dict.get(arg);
        if (!value) {
            value = new arg();
            this._dict.set(arg, value);
        }
        return value;
    };
    // dictionary o n -> 01(hash)
    Singleton._dict = new Map();
    return Singleton;
}());
exports.Singleton = Singleton;
//# sourceMappingURL=Singleton.js.map