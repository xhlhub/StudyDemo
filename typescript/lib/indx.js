var num = 1;
var str = 'abc';
var flag = true;
var arr = [1, 2, 3];
var arrStr = ["a", "b"];
var x = [1, "a"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var g = Color.Green;
var color = {
    red: 0,
    green: 1,
    blue: 2
};
var b = color.blue;
var u = undefined;
var n = null;
var unusable = undefined;
function warnUser() {
    console.log("This is my warning message");
}
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
create(42);
//# sourceMappingURL=indx.js.map