"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity() {
        //private compDict: Map<EComp, IComponent> = new Map<EComp, IComponent>();
        this.compents = [];
    }
    Entity.prototype.AddComp = function (comp, instance) {
        if (!instance) {
            instance = new comp();
        }
        this.compents.push([comp, instance]);
        return instance;
    };
    Entity.prototype.RemoveComp = function (comp) {
        if (comp) {
            for (var i = 0; i < this.compents.length; i++) {
                var element = this.compents[i];
                if (element[1] == comp) {
                    this.compents.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    };
    Entity.prototype.GetComp = function (comp) {
        for (var i = 0; i < this.compents.length; i++) {
            var element = this.compents[i];
            if (element[0] == comp) {
                return element[1];
            }
        }
        return undefined;
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map