//leetcode.cn/problems/merge-sorted-array/submissions/532715710/?envType=study-plan-v2&envId=top-interview-150

// https: function merge(nums1, m, nums2, n) {
//   let i = 0,
//     j = 0;
//   while (i < m + j && j < n) {
//     if (nums1[i] <= nums2[j]) {
//       ++i;
//     } else {
//       nums1.splice(i, 0, nums2[j]);
//       nums1.pop();
//       ++i;
//       ++j;
//     }
//   }
//   if (j < n) {
//     nums1.splice(i, n - j, ...nums2.slice(j));
//   }
// }

// const nums1 = [0];
// const nums2 = [2];
// merge(nums1, 0, nums2, 1);
// console.log(nums1);

// 数组移除指定数字
// var removeElement = function (nums, val) {
//   let repeat = 0;
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       repeat++;

//       --i;
//     }
//   }
//   return repeat;
// };
// var removeElement = function (nums, val) {
//   const len = nums.length;
//   nums = nums.filter((i) => i !== val);
//   debugger;
//   return nums.length;
// };
// const arr = [0, 1, 2, 2, 3, 0, 4, 2];
// console.log(removeElement(arr, 2));
// console.log(arr);
// var rotate = function (nums, k) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     arr[(i + k) % nums.length] = nums[i];
//   }
//   return arr;
// };

// var rotate = function (nums, k) {
//   let len = nums.length;
//   k = k % len;
//   for (let index = 0; index < k; index++) {
//     let temp1 = nums[index],
//       temp2;
//     for (let i = 0; i < nums.length / k; i++) {
//       temp2 = nums[(index + k * (i + 1)) % len];
//       nums[(index + k * (i + 1)) % len] = temp1;
//       // debugger;
//       temp1 = temp2;
//     }
//   }
// };
// var arrr = [1, 2, 3, 4, 5, 6, 7];
// rotate(arrr, 3);
// console.log(arrr);

// 121. 买卖股票的最佳时机

// const maxProfit = (array) => {
//   let gap = 0;
//   let allMinIndex = 0,
//     allMaxIndex = 0;
//   for (let index = 0; index < array.length; index++) {
//     const min = array[index];
//     let max = array[index + 1];
//     let maxIndex = index + 1;
//     for (let j = index + 2; j < array.length; j++) {
//       if (array[j] > max) {
//         max = array[j];
//         maxIndex = j;
//       }
//     }
//     if (max - min > gap) {
//       gap = max - min;
//       allMinIndex = index;
//       allMaxIndex = maxIndex;
//     }
//   }
//   return [gap, allMinIndex, allMaxIndex];
// };

// console.log(maxProfit([7, 3, 4, 5, 2, 8, 6, 10, 2]));

// function Person() {}
// Object.assign(Person.prototype, {
//   kind: "human",
// });

// const person = new Person();

// class Student extends Person {
//   job = "student";
// }

// const student = new Student();

var longestCommonPrefix = function (strs) {
  var word = strs[0];
  var chars = "";
  for (let j = 0; j < word.length; j++) {
    var char = word.charAt(j);
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].charAt(j) !== char) {
        return chars;
      }
    }
    chars += char;
  }
  return chars;
};

// console.log(longestCommonPrefix(["flabc", "fl", "flight"]));

var canJump = function (nums) {
  var i = 0;
  var maxIndex = 0;
  while (i < nums.length) {
    if (nums[i] + i > maxIndex) {
      maxIndex = nums[i] + i;
    }
    if (i < maxIndex) {
      i++;
    } else {
      return i === nums.length - 1;
    }
  }
  return true;
};

// console.log(canJump([1, 2, 0, 2, 1]));
// var jump = function (nums) {
//   var maxIndxMap = {};
//   var minPathMap = {};
//   // let testC1 = 0;
//   // let testC2 = 0;
//   let result = minPath(0);
//   // console.log(testC1);
//   // console.log(testC2);
//   return result;

//   function getMaxIndxMap(i) {
//     if (maxIndxMap[i] !== undefined) return maxIndxMap[i];
//     return (maxIndxMap[i] = i + nums[i]);
//   }

//   function minPath(index) {
//     if (index === 0) {
//       return 0;
//     }
//     if (minPathMap[i]) {
//       return minPathMap[i];
//     }
//     var minPathArr = [];
//     var i = index - 1;
//     while (i >= 0) {
//       if (getMaxIndxMap(i) >= index) {
//         minPathArr.push(minPath(i));
//       }
//       i--;
//     }
//     var result = Math.min(...minPathArr) + 1;
//     minPathMap[index] = result;
//     return result;
//   }
// };
// console.log(jump([2, 2, 1, 1, 3, 2, 5, 6, 8, 3, 1, 2, 0, 5]));
// 14 个 358  1059

// function jump(nums) {
//   if (nums.length === 1) return 0;
//   var maxLen = {
//     path: 0,
//     len: nums[0],
//   };
//   var minPath = {
//     path: 0,
//     len: nums[0],
//   };
//   var i = 1;
//   while (i < nums.length) {
//     if (i > minPath.len) {
//       minPath = maxLen;
//     }

//     if (i + nums[i] > maxLen.len) {
//       maxLen = {
//         path: minPath.path + 1,
//         len: i + nums[i],
//       };
//     }
//     i++;
//   }
//   return minPath.path + 1;
// }
// console.log(jump([3, 1, 3, 1, 2, 0, 5, 2]));

// var canConstruct = function (ransomNote, magazine) {
//   let mObj = {};
//   for (let i = 0; i < magazine.length; i++) {
//     if (mObj[magazine[i]]) {
//       mObj[magazine[i]] = mObj[magazine[i]] + 1;
//     } else {
//       mObj[magazine[i]] = 1;
//     }
//   }
//   let j = 0;
//   while (j < ransomNote.length) {
//     if (mObj[ransomNote[j]]) {
//       mObj[ransomNote[j]]--;
//     } else {
//       return false;
//     }
//     j++;
//   }
//   return true;
// };

// console.log(canConstruct("aa", "aab"));

// function throtter(fn, time) {
//   let stime;
//   return function (arg) {
//     let newTime = Date.now();
//     if (stime && newTime - stime > time) {
//       fn.call(this, arg);
//     }
//     stime = newTime;
//   };
// }

// const fun = () => console.log(1);
// const tfun = throtter(fun);

// window.addEventListener("scroll", tfun);

// subscription

// class Publisher {
//   constructor({ state = {}, reducer }) {
//     this.listener = [];
//     this.state = state;
//     this.reducer = reducer;
//   }

//   subscrip(action) {
//     this.listener.push(action);
//   }

//   dispatch(type, args) {
//     this.state = this.reducer[type]?.(this.state, args);
//     this.run();
//   }

//   run() {
//     this.listener.forEach((action) => {
//       action();
//     });
//   }
// }

// const store = new Publisher({
//   state: {
//     name: "a",
//     age: 0,
//   },
//   reducer: {
//     ADD: (state, count) => {
//       return {
//         ...state,
//         age: state.age + count,
//       };
//     },
//     "CHANGE-NAME": (state, name) => {
//       return {
//         ...state,
//         name,
//       };
//     },
//   },
// });

// function observer() {
//   console.log(store.state);
// }

// store.subscrip(observer);

// document.getElementById("btn").onclick = function () {
//   store.dispatch("ADD", 2);
// };

var summaryRanges = function (nums) {
  let len = nums.length;
  if (len === 0) {
    return [];
  }
  if (len === 1) {
    return [String(nums[0])];
  }

  let i = 1;
  let li = 0;
  let rangs = [];
  while (i < len) {
    if (nums[i] !== nums[i - 1] + 1) {
      if (i - 1 > li) {
        rangs.push(`${nums[li]}->${nums[i - 1]}`);
      } else {
        rangs.push(String(nums[li]));
      }
      li = i;
    }
    i++;
  }
  if (li === len - 1) {
    rangs.push(String(nums[li]));
  } else {
    rangs.push(`${nums[li]}->${nums[len - 1]}`);
  }

  return rangs;
};

// 反转链表

var reverseBetween = function (head, left, right) {};

// console.log("script start");

// async function async1() {
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2 end");
// }
// async1();

// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);

// new Promise((resolve) => {
//   console.log("Promise");
//   resolve();
// })
//   .then(function () {
//     console.log("promise1");
//   })
//   .then(function () {
//     console.log("promise2");
//   });

// console.log("script end");

// "script start"
// "async2 end"
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout

class ListChain {
  constructor(array) {
    this.initChain(array);
  }

  initChain(array) {
    let head = new ListNode(array[0]);
    this.head = head;
    let i = 1;
    while (i < array.length) {
      let curNode = new ListNode(array[i]);
      head.next = curNode;
      head = curNode;
      i++;
    }
  }
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var list1 = new ListChain([1, 2, 4]).head;
var list2 = new ListChain([1, 3, 4]).head;

var mergeTwoLists = function (list1, list2) {
  let head;
  let head1 = list1,
    head2 = list2;
  if (list1 === null || list2 === null) {
    head = list1 || list2;
    return head;
  }
  if (list1.val > list2.val) {
    head = list2;
    head2 = head2.next;
  } else {
    head = list1;
    head1 = head1.next;
  }
  let root = head;
  debugger;
  while (head1 && head2) {
    if (head1.val > head2.val) {
      head.next = head2;
      head2 = head2.next;
      debugger;
    } else {
      head.next = head1;
      head1 = head1.next;
      debugger;
    }
  }
  debugger;
  if (head1) {
    head.next = head1;
  }
  if (head2) {
    head.next = head2;
  }

  return root;
};
// const a = mergeTwoLists(list1, list2);

var hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }
  let fast = head.next,
    slow = head;
  while (fast && slow) {
    if (fast === slow) {
      return true;
    }
    fast = fast?.next?.next;
    slow = slow?.next;
  }
  return false;
};

var isIsomorphic = function (s, t) {
  let len = s.length;
  if (len < 2) {
    return true;
  }
  if (len !== t.length) {
    return false;
  }

  let keyMap = {},
    valueMap = {};
  let i = 0;
  while (i < len) {
    if (keyMap[s[i]]) {
      if (keyMap[s[i]] !== t[i]) return false;
    } else {
      keyMap[s[i]] = t[i];
    }
    if (valueMap[t[i]]) {
      if (valueMap[t[i]] !== s[i]) return false;
    } else {
      valueMap[t[i]] = s[i];
    }
    i++;
  }
  return true;
};

var combinationSum = function (arr, target) {
  const group = [];
  const candidates = arr.sort((a, b) => a - b);
  let i = 0;
  while (i < candidates.length) {
    dns(i, [], 0);
    i++;
  }
  return group;
  function dns(index, chain, chainSum) {
    let cur = candidates[index];
    let sum = chainSum + cur;
    chain.push(cur);
    if (sum === target) {
      group.push(chain);
    } else if (sum < target) {
      let i = index;
      while (i < candidates.length) {
        dns(i, [...chain], sum);
        i++;
      }
    }
  }
};

// console.log(combinationSum([2, 3, 5], 8));

var searchInsert = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  let mid;
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (target > nums[mid]) {
      l = mid + 1;
    } else if (target < nums[mid]) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return target > nums[l] ? l + 1 : l;
};
// console.log(searchInsert([1, 3, 5, 6], 7));

// 台阶
var climbStairs = function (n) {
  let count = 0;
  for (let index = 1; index < 3; index++) {
    recursive(0, index);
  }
  return count;

  function recursive(sum, step) {
    const levelSum = sum + step;
    if (levelSum === n) {
      count++;
      return;
    }
    if (levelSum > n) {
      return;
    }
    for (let index = 1; index < 3; index++) {
      recursive(levelSum, index);
    }
  }
};

function _climbStairs(n) {
  let steps = [1, 1];
  for (let i = 2; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n];
}

// 小偷
// 无脑递归，复杂度高
// var rob = function (nums) {
//   if (nums.length < 2) {
//     return nums[0];
//   }
//   return Math.max(recursive(0, 0), recursive(1, 0));
//   function recursive(i, sum) {
//     if (i >= nums.length) {
//       return sum;
//     }
//     let levelSum = sum + nums[i];
//     return Math.max(recursive(i + 2, levelSum), recursive(i + 3, levelSum));
//   }
// };

// 动态规划 m(i) = Math.max(m(i -1), m(i - 2) + nums[i])
var rob = function (nums) {
  if (nums.length < 2) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let o = 0;
  let p = 0;
  let q = nums[0];
  let r = nums[1];
  let i = 2;
  while (i < nums.length) {
    o = p;
    p = q;
    q = r;
    r = Math.max(o + nums[i], p + nums[i], q);
    i++;
  }
  return r;
};

console.log(rob([1, 2, 3, 1, 0, 2]));

var minimumTotal = function (triangle) {
  if (triangle.length === 1) {
    return triangle[[0]];
  }
  let preRowMinimum = triangle[0];
  for (let index = 1; index < triangle.length; index++) {
    const row = triangle[index];
    const curRowMinimum = [preRowMinimum[0] + row[0]];
    for (let j = 1; j < row.length - 1; j++) {
      curRowMinimum.push(
        Math.min(preRowMinimum[j], preRowMinimum[j - 1]) + row[j]
      );
    }
    curRowMinimum.push(
      preRowMinimum[preRowMinimum.length - 1] + row[row.length - 1]
    );
    preRowMinimum = curRowMinimum;
  }
  return Math.min(...preRowMinimum);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));

var addBinary = function (a, b) {
  let ai = a.length - 1;
  let bi = b.length - 1;
  let income = 0;
  let binarySum = "";
  while (ai >= 0 || bi >= 0) {
    if (ai < 0 && income === 0) {
      binarySum = b.substring(0, bi + 1) + binarySum;
      return binarySum;
    }
    if (bi < 0 && income === 0) {
      binarySum = b.substring(0, bi + 1) + binarySum;
      return binarySum;
    }
    let sum = Number(a[ai] ?? 0) + Number(b[bi] ?? 0) + income;
    switch (sum) {
      case 0:
        binarySum = "0" + binarySum;
        income = 0;
        break;
      case 1:
        binarySum = "1" + binarySum;
        income = 0;
        break;
      case 2:
        binarySum = "0" + binarySum;
        income = 1;
        break;
      case 3:
        binarySum = "1" + binarySum;
        income = 1;
        break;
    }
    ai--;
    bi--;
  }
  return income ? income + binarySum : binarySum;
};
console.log(addBinary("0", "1"));

var plusOne = function (arr) {
  let digits = [...arr];
  let income = 0;
  for (let index = digits.length - 1; index >= 0; index--) {
    let sum =
      index === digits.length - 1
        ? digits[index] + 1 + income
        : digits[index] + income;
    if (sum < 10) {
      digits[index] = sum;
      income = 0;
    } else {
      digits[index] = sum % 10;
      income = 1;
    }
  }
  if (income === 1) {
    digits.unshift(1);
  }
  return digits;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function (nums) {
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);
  if (nums.length > 1) {
    buildTree(root, nums.slice(0, mid), nums.slice(mid + 1));
  }
  return root;
};

function buildTree(root, leftArr, rightArr) {
  if (leftArr.length > 0) {
    let leftMid = Math.floor(leftArr.length / 2);
    root.left = new TreeNode(leftArr[leftMid]);
    if (leftArr.length > 1) {
      buildTree(
        root.left,
        leftArr.slice(0, leftMid),
        leftArr.slice(leftMid + 1)
      );
    }
  }
  if (rightArr.length > 0) {
    let rightMid = Math.floor(rightArr.length / 2);
    root.right = new TreeNode(rightArr[rightMid]);
    if (rightArr.length > 1) {
      buildTree(
        root.right,
        rightArr.slice(0, rightMid),
        rightArr.slice(rightMid + 1)
      );
    }
  }
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
