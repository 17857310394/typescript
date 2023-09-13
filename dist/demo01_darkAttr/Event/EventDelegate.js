"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventDelegateInfo = /** @class */ (function () {
    function EventDelegateInfo() {
    }
    return EventDelegateInfo;
}());
exports.EventDelegateInfo = EventDelegateInfo;
var EventDelegate = /** @class */ (function () {
    function EventDelegate() {
        this._eventListeners = new Map();
    }
    EventDelegate.prototype.invoke = function (type) {
        var list = this._eventListeners.get(type);
        if (list) {
            var len = list.length;
            for (var index = len - 1; index >= 0; index--) {
                var element = list[index];
                if (element && element.func) {
                    try {
                        element.func.call(element.thisobj);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                else {
                    element.func.call(element.thisobj);
                }
            }
            return len > 0;
        }
        return false;
    };
    EventDelegate.prototype.addEventListener = function (type, callback, thisobj) {
        var list = this._eventListeners.get(type);
        if (!list) {
            list = [];
            this._eventListeners.set(type, list);
        }
        if (list) {
            var info = new EventDelegateInfo();
            info.func = callback;
            info.thisobj = thisobj;
            list.splice(0, 0, info);
        }
    };
    EventDelegate.prototype.removeEventListener = function (type, callback, thisobj) {
        var list = this._eventListeners.get(type);
        if (list) {
            for (var index = 0; index < list.length; index++) {
                var element = list[index];
                if (element.func === callback && element.thisobj === thisobj) {
                    list.splice(index, 1);
                    break;
                }
            }
        }
    };
    EventDelegate.prototype.dispose = function () {
        this._eventListeners.clear();
    };
    return EventDelegate;
}());
exports.EventDelegate = EventDelegate;
//# sourceMappingURL=EventDelegate.js.map