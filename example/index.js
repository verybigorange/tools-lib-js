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
// const $$arr = $$.of([1,2,3])
// $$arr.push(0)
// console.log($$.of([1,2,3,4]).map(item=>item*2).$$pop(0).$$pop([0,1]))

// console.log($$.of([1,2,3]).$$unshift())
// console.log($$.of([1,2,3]).$$shift())

// console.log($$.of([1,2,3]).$$reverse().$$push(0))
// console.log($$.of([1,2,3]).$$splice(0,1,'a','b'))

// console.log($$.of([4,2,3]).$$sort(function(a,b){return b-a}))
// console.log($$.of([4,2,3]).$$sort(function(a,b){return a-b}))
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

console.log($$.of([4,2,3]).splice(1,1,'a','b').toArray())