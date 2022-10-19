// 数字、字符串、布尔值
const num: number = 1;
const str: string = 'abc';
const flag: boolean = true;


// 数组
const arr: number[] = [1,2,3];
const arrStr: Array<string> = ["a", "b"];

let x: [number, string] = [1, "a"]


// 枚举
enum Color { Red, Green, Blue }
let g: Color = Color.Green

let color = {
    red: 0,
    green: 1,
    blue: 2
}
let b = color.blue;


// undefined 和 null
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;
function warnUser(): void {
    console.log("This is my warning message");
}


// Never
// never类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}


// Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error


// 类型断言: as 或者 <>
let someValue: any = "I have a dream!"
let strLength: number = (someValue as string).length
let strLength1: number = (<string>someValue).length

// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
//   }
  
//   let myObj = { size: 10, label: "Size 10 Object" };
//   printLabel(myObj);

  interface LabelledValue {
    label: string;
  }
  
  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }
  
  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);

  // extends 约束
interface Person {
  name: string,
  age: number,
  think: ()=> void,
}
function test<T extends Person>(user: T): void {
  console.log(user.name)
}

test({
  name: 'long',
  age: 12,
  think: () => {},
  sex: 'man',
})