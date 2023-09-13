"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyEvent = /** @class */ (function () {
    function MyEvent() {
        this.handlers = [];
    }
    MyEvent.prototype.subscribe = function (handler) {
        this.handlers.push(handler);
    };
    MyEvent.prototype.unsubscribe = function (handler) {
        var index = this.handlers.indexOf(handler);
        if (index !== -1) {
            this.handlers.splice(index, 1);
        }
    };
    MyEvent.prototype.fire = function (data) {
        this.handlers.forEach(function (handler) { return handler(data); });
    };
    return MyEvent;
}());
exports.MyEvent = MyEvent;
//# sourceMappingURL=MyEvent.js.map