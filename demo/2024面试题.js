const nullToUndefined = (arg) => {};

// 基本：
// number string boolean null undefined Symbol BigInt

// 引用：
// object (Array Date RegExp Function)
const deepClone = (arg) => {
  if (
    typeof arg === "string" ||
    typeof arg === "number" ||
    typeof arg === "boolean" ||
    arg === null ||
    arg === undefined
  ) {
    return arg;
  }

  if (Array.isArray(arg)) {
    return arg.map((item) => deepClone(item));
  }

  if (typeof arg === "object") {
    if (Object.prototype.toString.call(arg) === "[object Date]") {
      return new Date(arg);
    }
    if (Object.prototype.toString.call(arg) === "[object RegExp]") {
      return new RegExp(arg);
    }

    let obj = new arg.__proto__.constructor();
    if (Object.keys(arg).length) {
      Object.keys(arg).forEach((key) => {
        obj[key] = deepClone(arg[key]);
      });
    }
    return obj;
  }
};

class Person {
  type = "person";
  constructor(name) {
    this.name = name;
  }
  love() {
    console.log("love");
  }
}

const target = {
  name: "a",
  types: ["o", { name: "o", isObj: true, reg: /d/i }, null],
  time: new Date(),
  kind: undefined,
  child: new Person("wang"),
};

const copy = deepClone(target);

console.log(copy);
