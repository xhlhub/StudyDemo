function Person(name){
    this.name = name
}

Person.prototype.type = 'person'

var person1 = new Person('xiaoming')
person1.age = 12

/*
    构造函数 <==> 原型对象
*/
// 1:构造函数.prototype => 原型对象
//   创建一个函数，就会为函数创建一个prototype属性，指向构造函数的原型对象
console.log(Person.prototype) // Person的原型对象
// 2:原型对象.constructor => 构造函数
// 默认原型对象会获得一个constructor属性，指向构造函数
console.log(Person.prototype.constructor === Person, 'constructor') // true
console.log(Object.getPrototypeOf(person1).constructor === Person, 'constructor') // true
// 但当重写了原型对象后，constructor 属性丢失（a:赋值 b:setProtoTypeOf）
var personPrototype = {
    kind : 'animal'
}
    // a:直接重写构造函数原型对象
    // Person.prototype = personPrototype
    console.log(Person.prototype === personPrototype, 'prototype') // true

    // Person.prototype指向 personPrototype，而personPrototype没有constructor属性
    console.log(Person.prototype.constructor === Person, '修改构造函数原型对象后的constructor指向') // false
    // getPrototypeOf还可以正确返回原型对象指向的构造函数
    console.log(Object.getPrototypeOf(person1).constructor === Person, '修改构造函数原型对象后的constructor指向') // true

    // b:重写实例原型对象
    var person3 = new Person('xiaotao')
    Object.setPrototypeOf(person3, personPrototype)
    // Person.prototype指向 personPrototype，而personPrototype没有constructor属性
    console.log(Person.prototype.constructor === Person, '修改实例原型对象后的constructor指向') // true
    // getPrototypeOf还可以正确返回原型对象指向的构造函数
    console.log(Object.getPrototypeOf(person3).constructor === Person, '修改实例原型对象后的constructor指向') // false

/*
    判断属性是实例属性还是原型属性
*/
// 判断属性是不是实例属性 hasOwnProperty
console.log(person1.hasOwnProperty('age')) // true
console.log(person1.hasOwnProperty('name')) // true
console.log(person1.hasOwnProperty('type')) // false

// 判断对象是否有某属性（实例属性+原型属性）in
console.log('name' in person1) // true
console.log('type' in person1) // true


/* 
    遍历 
*/
// 遍历属性（实例属性+原型属性）in
for (key in person1) {
    console.log(key) // name,age,type
}

// 遍历实例属性 keys
Object.keys(person1).forEach(key => {
    console.log(key) // name,age
})

/*
    实例 <==> 原型对象
*/
// 获取实例的原型对象 getPrototypeOf
console.log(Object.getPrototypeOf(person1)) // es6方法
// console.log(person1.__prototype__) // 不推荐，不太合法，只有浏览器环境支持

// 设置原型对象 setPrototypeOf
var person2 = new Person('xiaohong')
Object.setPrototypeOf(person2, {
    sex:'woman',
    like: function () {
        return `My name is ${this.name},i like xiao ming`
    }
})
console.log(person2.like())

// 判断是否是实例的原型对象 isPrototypeOf
var person4 = new Person('xiaoka')
var prototypeObj1 = {
    flag:true
}
Object.setPrototypeOf(person4, prototypeObj1)
console.log(prototypeObj1.isPrototypeOf(person4), 'isPrototypeOf') // true