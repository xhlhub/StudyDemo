// 实现一个股票最合适购买时机算法
// [3,5,1,8,2,4] 输出 7

// 解法一：2次遍历

const array = [3, 11, 1, 7, 2, 4];

// const findMaxGap = (arr) => {
//   if (arr.length < 2) {
//     return 0;
//   }

//   if (arr.length === 2) {
//     return Math.max(arr[1] - arr[0], 0);
//   }

//   let buyIndex,
//     sellIndex,
//     maxGap = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const buy = arr[i];
//     let maxSell = arr[i + 1];
//     for (var j = i + 2; j < arr.length; j++) {
//       const sell = arr[j];
//       if (sell > maxSell) {
//         maxSell = sell;
//       }
//     }
//     if (maxSell - buy > maxGap) {
//       buyIndex = i;
//       sellIndex = j;
//       maxGap = maxSell - buy;
//     }
//   }
//   return maxGap;
// };

// 递归法
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

console.log(maxProfit(array));
