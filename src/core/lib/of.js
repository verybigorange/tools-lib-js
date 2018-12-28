import Type from '../Type/index.js'
import $$Array from '../Array/index.js'

export default function (wrap){
    if(Type.isArray(wrap)){
        return new $$Array(wrap).__init(wrap)
    }
    if(Type.isObject(wrap)){
        
    }
}