import "../src/index";

console.log(_t);

// document.body.onclick = _t.throttle(() => {
//   console.log(1);
// }, 3000);

const debounceFn = _t.debounce((val) => {
    console.log(val);
  }, 1000);

document.body.onclick = ()=>{
    debounceFn('value')
}
