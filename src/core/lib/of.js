import Type from '../Type/index.js'
import { List } from 'immutable'

export default function (wrap){
    if(Type.isArray(wrap)){
        return List(wrap)
    }
    if(Type.isObject(wrap)){
        
    }
}