import { log_error } from "../../uitils/log";

const Exp = {
  isPhone(e) {
    return /^1[3456789]\d{9}$/.test(e)
  },
  //15位和18位的身份证   
  isIDCard(e){
      return /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/.test(e)
  },
  isEmail(e){
      return /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(e)
  },
  isTel(e){
      return /([0-9]{3,4}-)?[0-9]{7,8}/.test(e)
  },
  isPostal(e){
      return /[1-9]\d{5}(?!\d)/.test(e)
  }
};

export default Exp;
