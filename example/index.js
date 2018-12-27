import "../src/index";

console.log(_t);

// document.body.onclick = _t.throttle(() => {
//   console.log(1);
// }, 3000);

// const debounceFn = _t.debounce((val) => {
//     console.log(val);
//   }, 1000);

// document.body.onclick = ()=>{
//     debounceFn('value')
// }

let obj = {a:1,b:2}
let observer = _t.observable(obj).subscribe(newVal => console.log(newVal))

observer.a = 2
observer.b = 3
observer.c = 4
console.log(obj)
