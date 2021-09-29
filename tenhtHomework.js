//1
function minus(a = 0) {
  return function (b = 0) {
    return a - b;
  };
}

console.log(minus(10)(6)); // 4

console.log(minus(5)(6)); // -1

console.log(minus(10)()); // 10

console.log(minus()(6)); // -6

console.log(minus()()); // 0

//2
function multiplyMaker(val = 0) {
  let tmp = val;
  return function (n = 0) {
    return (tmp *= n);
  };
}

const multiply = multiplyMaker(2);

console.log(multiply(2)); // 4 (2 * 2)

console.log(multiply(1)); // 4 (4 * 1)

console.log(multiply(3)); // 12 (4 * 3)

console.log(multiply(10)); // 120 (12 * 10)

//3
const third = (function () {
  let str = "";
  function Empty(s = "") {
    str = String(s);
    return str;
  }
  function get() {
    return str;
  }
  function getLength() {
    return str.length;
  }
  function getReverce() {
    return str.split("").reverse().join("");
  }
  return {
    Empty,
    get,
    getLength,
    getReverce,
  };
})();
console.log(third.Empty("qwerty"));
console.log(third.get());
console.log(third.getLength());
console.log(third.getReverce());

//4
const four = (function () {
  let a;
  function Get(b = 10) {
    a = b;
    return this;
  }
  function Plus() {
    a += 5;
    return this;
  }
  function Mn() {
    a *= 2;
    return this;
  }
  function Pow() {
    a = Math.pow(a, 2);
    return this;
  }
  function Got() {
    return a;
  }
  return {
    Get,
    Plus,
    Mn,
    Pow,
    Got,
  };
})();
console.log(four.Get().Plus().Mn().Pow().Got());

function foo() {
  console.log(i);
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}
foo();
