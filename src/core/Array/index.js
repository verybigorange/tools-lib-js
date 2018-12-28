import { log_error } from "../../uitils/log";
import Type from "../Type/index.js";
import Uitils from "../Utils/index.js";

class $$Array extends Array {
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
