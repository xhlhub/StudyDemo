function deepClone(target) {
  var type = Object.prototype.toString.call(target);

  if (
    type === "[object Number]" ||
    type === "[object String]" ||
    type === "[object Boolean]" ||
    type === "[object Null]" ||
    type === "[object Undefined]"
  ) {
    return target;
  }

  if (type === "[object Date]") {
    return new Date(target);
  }

  if (type === "[object RegExp]") {
    return new RegExp(target);
  }

  if (type === "[object Array]") {
    return target.map((t) => deepClone(t));
  }

  if (type === "[object Function]") {
    return {};
  }

  if (type === "[object Object]") {
    let result = {};
    Object.keys(target).forEach((key) => {
      result[key] = deepClone(target[key]);
    });
    return result;
  }

  return target;
}
