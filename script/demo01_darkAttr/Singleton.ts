type mConstructor<T> = new (...args: any[]) => T
type nConstructor<T> = new () => T
declare type GConstructor<T> = mConstructor<T> | nConstructor<T>

export interface ISingleton {
    clear();
}

export class Singleton {

    // dictionary o n -> 01(hash)
    private static _dict: Map<any, any> = new Map<any, any>();

    public static Put<T extends ISingleton>(arg: GConstructor<T>, value: T): T {
        this._dict.set(arg, value);
        return value;
    }

    public static Destroy<T extends ISingleton>(arg: GConstructor<T>) {
        if (this._dict) {
            this._dict.delete(arg);
        }
    }

    public static Clear() {
        if (this._dict) {
            this._dict.forEach(this.clearAll, this);
        }
    }

    private static clearAll(value: any) {
        if (value.clear) {
            value.clear();
        }
    }

    public static DestroyAll() {
        if (this._dict) {
            this._dict.clear();
        }
    }

    public static ContainInstance<T extends ISingleton>(arg: GConstructor<T>): boolean {
        const value: any = this._dict.get(arg);
        if (value) {
            return true;
        }
        return false;
    }

    public static GetInstance<T extends ISingleton>(arg: GConstructor<T>): T {
        let value: any = this._dict.get(arg);
        if (!value) {
            value = new arg();
            this._dict.set(arg, value);
        }
        return value as T;
    }

}