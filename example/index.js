import "../src/index";

console.log($$);

// document.body.onclick = $$.throttle(() => {
//   console.log(1);
// }, 3000);

// const debounceFn = $$.debounce((val) => {
//     console.log(val);
//   }, 1000);

// document.body.onclick = ()=>{
//     debounceFn('value')
// }

// let obj = {a:1,b:2}
// let observer = $$.observable(obj).subscribe((newVal,key,value) => console.log(newVal,key,value))

// observer.a = 2
// observer.b = 3
// observer.c = 4
// console.log(obj)

// console.log($$.of([4,2,3]))
// console.log($$.of([4,2,3]).toJS())
// console.log($$.of([4,2,3]).toArray())
// console.log($$.of([1,2,3]).count())
// console.log($$.of([1,2,3]).get(0))
// console.log($$.of([1,2,3]).set(0,'a'))
// console.log($$.of([1,2,3]).delete(1))
// console.log($$.of([1,2,3]).insert(1,'a'))
// console.log($$.of([1,2,3]).pop())

// console.log($$.of([1,2,3]).push(4).reverse())
// console.log($$.of([4,2,3]).sort(function(a,b){return b-a}))
// console.log($$.of([4,2,3]).sort(function(a,b){return a-b}))
// console.log($$.of([1,2,3]).clear())

// console.log($$.of([1,2,3]).includes(0))
// console.log($$.of([1,2,3]).includes(1))

// console.log($$.of([4,2,3]).splice(1,1,'a','b').toArray())
// console.log($$.of({a:1,b:2,c:3}))
// console.log($$.of({a:1,b:2,c:3}).size)

// const obj = {a:{aa:1},b:2,c:3}
// const obj2 = $$.of(obj).toObject()
// obj2.a.aa = 'change'

// console.log(obj,obj2)
// console.log($$.of({a:1,b:2,c:3}).toObject())
// console.log($$.of({a:1,b:2,c:3}).get('b'))
// console.log($$.of({a:1,b:2,c:3}).set('a',0).toObject())

// console.log($$.of({a:1,b:2,c:3}).delete('a').toObject())
// console.log($$.of({a:1,b:2,c:3}).deleteAll(['a','b']).toObject())
// console.log($$.of({a:1,b:2,c:3}).clear().toObject())
// console.log($$.of({a:1,b:2,c:3}).merge({c:4,d:5}).toObject())

// console.log($$.of({a:{aa:1},b:2,c:3}).mergeDeep({a:{aa:3},b:3}).toObject())

// console.log($$.of({a:1,b:2,c:3}).map(v => v*2).toObject())
// console.log($$.of({a:1,b:2,c:3}).filter(v => v>1).toObject())
// $$.of({a:1,b:2,c:3}).mapKeys(item=>console.log(item))
// $$.of({a:1,b:2,c:3}).forEach((item,key)=>console.log(item,key))
// console.log($$.of({a:1,b:2,c:3}).has('a'))
// const obj = {a:1,b:2}
// const obj1 = $$.of(obj).set('a',0).toObject()
// console.log(obj,obj1)
console.log($$.isPhone('17723319394'))
console.log($$.isIDCard('51018319930420001X'))
console.log($$.isEmail('449732828@qq.com'))
console.log($$.isTel('028-88770277'))
console.log($$.isTel('88770277'))
console.log($$.isPostal('611530'))