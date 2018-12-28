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
const $$arr = $$.of([1,2,3])
// $$arr.push(0)
console.log($$.of([1,2,3,4]).map(item=>item*2).$$pop(0).$$pop([0,1]))
