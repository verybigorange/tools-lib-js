import { log_error } from "../../../uitils/log.js";

class Observer {
  constructor(dep) {
    this.dep = dep;
    this.callback = null;
  }

  observe() {
      return this.__proxy();
  }

  __proxy() {
    let p = new Proxy(this.dep, {
      get: (obj, prop) => {
        return obj[prop];
      },
      set: (obj, prop, value) => {
        obj[prop] = value;
        if (typeof this.callback === "function") {
          this.callback(obj);
        }
        return true;
      }
    });

    this.__bindProp(p);
    return p;
  }

  __bindProp(p) {
    Object.defineProperty(p, "subscribe", {
      value: fn => {
        if (typeof fn === "function") {
          this.callback = fn;
          return p;
        } else {
          log_error("in subscribe,arg type must be Function");
        }
      },
      configurable: false,
      enumerable: false,
      writable: false
    });

    Object.defineProperty(p, "unsubscribe", {
      value: () => {
        this.callback = null;
        return p;
      },
      configurable: false,
      enumerable: false,
      writable: false
    });
  }
}
export default Observer;
