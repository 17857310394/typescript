export class EventDelegateInfo {
    public func: Function;

    public thisobj: any;
}


export class EventDelegate<T> {
    public _eventListeners: Map<T, EventDelegateInfo[]> = new Map();

    public invoke(type: T):boolean {
        const list = this._eventListeners.get(type);
        if (list) {
            const len = list.length;
            for (let index = len - 1; index >= 0; index--) {
                const element = list[index]
                if (element && element.func) {
                    try {
                            element.func.call(element.thisobj);
                        } catch (error) {
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
    }

    public addEventListener(type: T, callback: (...args: any[]) => void, thisobj?: any) {
        let list = this._eventListeners.get(type);
        if (!list) {
            list = []
            this._eventListeners.set(type, list);
        }

        if (list) {
            const info = new EventDelegateInfo();
            info.func = callback;
            info.thisobj = thisobj;

            list.splice(0, 0, info)
        }
    }

    public removeEventListener(type: T, callback: (...args: any[]) => void, thisobj?: any) {
        const list = this._eventListeners.get(type);
        if (list) {
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                if (element.func === callback && element.thisobj === thisobj) {
                    list.splice(index, 1);
                    break;
                }
            }
        }
    }

    public dispose() {
        this._eventListeners.clear();
    }
}