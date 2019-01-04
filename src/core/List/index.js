import Uitils from "../Utils/index.js";
import produce from "immer";

class $$List {
  constructor(resource) {
    this.__currentValue = resource;
    this.size = this.__currentValue.length;
  }

  $$toArray() {
    return this.__currentValue.slice();
  }

  $$toJS() {
    return Uitils.deepClone(this.__currentValue);
  }

  $$pop() {
    return this.__handle(draft => {
      draft.pop();
    });
  }

  $$count() {
    return this.__currentValue.length;
  }

  $$get(index) {
    return this.__currentValue[index];
  }

  $$set(index, val) {
    return this.__handle(draft => {
      draft[index] = val;
    });
  }

  $$delete(index) {
    return this.__handle(draft => {
      draft.splice(index, 1);
    });
  }

  $$insert(index, val) {
    return this.__handle(draft => {
      draft.splice(index, 0, val);
    });
  }

  $$splice() {
    return this.__handle(draft => {
      Array.prototype.splice.apply(draft, arguments);
    });
  }

  $$sort() {
    return this.__handle(draft => {
      Array.prototype.sort.apply(draft, arguments);
    });
  }

  $$clear() {
    return this.__handle(draft => {
      draft.length = 0;
    });
  }

  $$push(el) {
    return this.__handle(draft => {
      draft.push(el);
    });
  }

  $$unshift(el) {
    return this.__handle(draft => {
      draft.unshift(el);
    });
  }

  $$shift() {
    return this.__handle(draft => {
      draft.shift();
    });
  }

  $$reverse() {
    return this.__handle(draft => {
      draft.reverse();
    });
  }

  $$includes(val) {
    return this.__currentValue.includes(val);
  }

  $$join() {
    return Array.prototype.join.apply(this.__currentValue, arguments);
  }

  $$slice() {
    return this.__factory(
      Array.prototype.slice.apply(this.__currentValue, arguments)
    );
  }

  $$filter(fn) {
    return this.__factory(this.__currentValue.filter(fn));
  }

  $$forEach(fn) {
    return this.__factory(this.__currentValue.forEach(fn));
  }

  $$map(fn) {
    return this.__factory(this.__currentValue.map(fn));
  }

  $$every(fn) {
    return this.__currentValue.every(fn);
  }

  $$some(fn) {
    return this.__currentValue.some(fn);
  }

  $$reduce() {
    return Array.prototype.reduce.apply(this.__currentValue, arguments);
  }

  $$reduceRight() {
    return Array.prototype.reduceRight.apply(this.__currentValue, arguments);
  }

  __handle(fn) {
    return this.__factory(this.__p(fn));
  }

  __p(fn) {
    return produce(this.__currentValue, d => {
      fn(d);
    });
  }

  __factory(resource) {
    return new $$List(resource);
  }
}

export default $$List;
