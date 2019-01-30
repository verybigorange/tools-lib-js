/**
 * 通过继承的方式深拷贝对象。
 * 源对象中的属性更改会导致生成对象的属性值更改，
 * 但是生成对象的属性更改不会影响源对象。
 * 即：父可以影响子，但子不可以影响父。 
 */
const clone = function(obj) {
    const cloneObj = Object.create(obj);
    for (let key of Object.keys(obj)) {
        if (typeof obj[key] === 'object' || typeof obj[key] === 'function') {
            cloneObj[key] = Object.clone(obj[key]);
        }
    }
    return cloneObj;
}

export default {
    clone
}
