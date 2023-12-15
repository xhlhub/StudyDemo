// 输出字符串最长出现的字母
const findMaxLetter = (str) => {
  if (str === "") return 0;
  const letterMap = {};
  str.split("").forEach((letter) => {
    if (letterMap[letter]) {
      letterMap[letter]++;
    } else {
      letterMap[letter] = 1;
    }
  });
  debugger;
  return Math.max(...Object.values(letterMap));
};

console.log(findMaxLetter(""));

// 句子中每个单词首字母大写
const toUpFirstLetter = (sentence) => {
  const words = sentence.split(" ");
  const upWords = words.map(
    (word) => word.slice(0, 1).toUpperCase() + word.slice(1)
  );
  return upWords.join(" ");
};

console.log(toUpFirstLetter("hello word"));

// for (const str of "word") {
//   console.log(str);
// }

// 平均值
const getAverage = (arr) => {
  const sum = arr.reduce((pre, cur) => pre + cur, 0);
  return sum / arr.length;
};

console.log(getAverage([1, 2, 3, 4]));

// 阶梯
// const getStage = (n) => {
//   let stage = "";
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= 2 * n; j++) {
//       j < 2 * i ? (str += "$") : (str += " ");
//     }
//     str += "\n";
//     stage += str;
//   }
//   return stage;
// };
// console.log(getStage(10));
// 金字塔
// const getStage = (n) => {
//   let stage = "";
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j < 2 * n; j++) {
//       if (j > n - i && j < n + i) {
//         str += "$";
//       } else {
//         str += " ";
//       }
//     }
//     stage += str + "\n";
//   }
//   return stage;
// };
// console.log(getStage(10));

// 矩阵
const A = [
  [1, 1, 1],
  [2, 2, 2],
];
const B = [
  [1, 2, 3],
  [4, 3, 2],
];

const add = (a, b) => {
  if (a.length !== b.length) {
    throw new Error("数组行不相等，不能相加");
  }
  let C = [];
  for (let i = 0; i < a.length; i++) {
    C.push([]);
    for (let j = 0; j < a[i].length; j++) {
      C[i][j] = a[i][j] + b[i][j];
    }
  }
  return C;
};

console.log(add(A, B));
