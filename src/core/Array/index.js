import { log_error } from "../../uitils/log";
import Type from "../Type/index.js";
import Uitils from "../Utils/index.js";

class $$Array extends Array {
  /**
   * @method 删除某个或者多个元素
   */
  $$pop(index) {
    const len = this.length;
    return this.filter((item, i) => {
      if (index !== 0 && !index) return i != len - 1;

      if (Type.isArray(index)) {
        return !index.includes(i);
      } else {
        return i != index;
      }
    });
  }

  $$push(el) {
    this.push(el);
    return this;
  }

  $$unshift(el) {
    this.unshift(el);
    return this;
  }

  $$shift() {
    this.shift();
    return this;
  }

  $$reverse() {
    this.reverse();
    return this;
  }

  $$splice() {
    this.splice.apply(this,arguments);
    return this;
  }

  $$sort() {
    this.sort.apply(this,arguments);
    return this;
  }

  __init(resource) {
    const copy = Uitils.deepClone(resource);
    for (let key in copy) {
      this[key] = copy[key];
    }
    this.length = copy.length;
    return this;
  }
}

export default $$Array;
