import { log_error } from "../../uitils/log";

const ArrayTool = {
  isArray(e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  },

  pop(arr, index) {
    if (!this.isArray(arr)) {
      log_error("in pop.argument[0] type must be Array");
      return;
    }
    return arr.filter((item, i) => {
      if (!index) return i != arr.length - 1;

      if (this.isArray(index)) {
        return !index.includes(i);
      } else {
        return i != index;
      }
    });
  }
}

export default ArrayTool;
