import Uitils from "../Utils/index.js";
import produce from "immer";

class $$Map {
  constructor(resource) {
    this.__currentValue = resource;
    this.keys = Object.keys(this.__currentValue);
    this.size = this.keys.length;
  }

  $$toObject() {
    return Object.assign({}, this.__currentValue);
  }

  $$toJS() {
    return Uitils.deepClone(this.__currentValue);
  }

  $$get(key) {
    return this.__currentValue[key];
  }

  $$set(key, val) {
    return this.__handle(draft => {
      draft[key] = val;
    });
  }

  $$delete(key) {
    return this.__handle(draft => {
      delete draft[key];
    });
  }

  $$deleteAll(keys) {
    return this.__handle(draft => {
      keys.forEach(key => {
        delete draft[key];
      });
    });
  }

  $$clear() {
    return this.__handle(draft => {
      for (let key in draft) {
        delete draft[key];
      }
    });
  }

  $$merge(obj) {
    return this.__factory(Object.assign({}, this.__currentValue, obj));
  }

  $$map(fn) {
    return this.__handle(draft => {
      for (let key in draft) {
        draft[key] = fn(draft[key], key, draft);
      }
    });
  }

  $$filter(fn) {
    return this.__handle(draft => {
      for (let key in draft) {
        if (!fn(draft[key], key, draft)) delete draft[key];
      }
    });
  }

  $$forEach(fn) {
    return this.__handle(draft => {
      for (let key in draft) {
        fn(draft[key], key, draft);
      }
    });
  }

  $$mapKeys(fn) {
    this.keys.forEach(k => fn(k));
  }

  $$has(key) {
    return this.__currentValue.hasOwnProperty(key);
  }

  __handle(fn) {
    const __factory = this.__factory;
    delete this
    return __factory(this.__p(fn));
  }

  __p(fn) {
    return produce(this.__currentValue, d => {
      fn(d);
    });
  }

  __factory(resource) {
    return new $$Map(resource);
  }
}

export default $$Map;
