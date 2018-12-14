import { log_error } from "../../uitils/log";

const Utils = {
  /**
   * @description 函数节流
   * @param { Function } fn 需要节流的函数
   * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
   * */
  throttle(fn, t = 1000) {
    if (typeof fn !== "function") {
      log_error("in throttle,first argument must be Function");
      return;
    }
    let _fn = fn;
    let time = null;
    let first = true;
    return function() {
      let arg = arguments;
      let _this = this;
      if (first) {
        _fn.apply(_this, arg);
        first = false;
        return;
      }
      if (time) return;
      time = setTimeout(function() {
        setTimeout(time);
        time = null;
        _fn.apply(_this, arg);
      }, t);
    };
  },

  /**
   * @description 函数防抖
   * @param { Function } fn 需要防抖的函数
   * @param { Number } t 防抖时间 单位ms
   */
  debounce(fn, t = 1000) {
    if (typeof fn !== "function") {
      log_error("in debounce,first argument must be Function");
      return;
    }
    let time;

    return function() {
      const arg = arguments;
      
      if (time) {
        clearTimeout(time);
        time = null;
        return
      };
      time = setTimeout(() => {
        fn.apply(this, arg);
        time = null;
      }, t);
    };
  }
};

export default Utils;
