"use strict";

const arrayDiff = function (a, b) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      c.push(a[i]);
    }
  }
  return c;
};

console.log(arrayDiff([1, 2, 2, 2, 2, 2, 2, 4, 3], [2]));

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}

console.log(array_diff([4, 5, 2, 3, 23, 11], [2, 3, 5]));
