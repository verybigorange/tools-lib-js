import {log_error} from '../../uitils/log'

const Type = {
    isArray(e) {
        return Object.prototype.toString.call(e) === '[object Array]'
    },

    isObject(e){
        return Object.prototype.toString.call(e) === '[object Object]'
    },

    isFunction(e){
        return Object.prototype.toString.call(e) === '[object Function]'
    },

    isString(e){
        return Object.prototype.toString.call(e) === '[object String]'
    },

    isUndefined(e){
        return e === undefined
    },

    isNull(e){
        return e === null
    },

    isNumber(e){
        return Object.prototype.toString.call(e) === '[object Number]'
    },

    isBoolean(e){
        return Object.prototype.toString.call(e) === '[object Boolean]'
    },

    /**
     * @description 判断对象是否是空对象
     * @param { Object } 传入的对象
     * @return Boolean 是否是空对象
     */
    isEmptyObject (e) {
        if (!this.isObject(e)) log_error('参数不是真正的object对象')
        return JSON.stringify(e) === '{}'
    },
} 

export default Type;
