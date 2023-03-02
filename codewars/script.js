//1

function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) counter += 1;
  }
  return counter;
}

//2

function barTriang(p1, p2, p3) {
  return [
    +((p1[0] + p2[0] + p3[0]) / 3).toFixed(4),
    +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4),
  ];
  //your code here
}

//3

var cubeChecker = function (volume, side) {
  if (side <= 0 || volume <= 0) return false;
  console.log(volume ** (1 / 3));
  return Math.cbrt(volume) === side;
};

//4

function chromosomeCheck(sperm) {
  return sperm === 'XY'
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

//5

function numberToPower(number, power) {
  console.info(Math.log2(1024));
  let total = 1;
  for (let i = 1; i <= power; i++) {
    total = total * number;
  }
  return total; // Code here
}

//6

function strCount(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

//7

function nearestSq(n) {
  let sqrtOfN = Math.trunc(Math.sqrt(n));
  let result =
    Math.abs(sqrtOfN * sqrtOfN - n) >
    Math.abs((sqrtOfN + 1) * (sqrtOfN + 1) - n)
      ? sqrtOfN + 1
      : sqrtOfN;

  if (sqrtOfN * sqrtOfN === n) {
    result = n;
  } else {
    result = result * result;
  }
  return result; // your code
}

//8

function mystery() {
  var results = { sanity: 'Hello' };
  return results;
}

//9

function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0 ? true : false;
}

//10

function century(year) {
  let centuryCount = 0;
  while (year > 0) {
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount; // Finish this :)
}

//11

function getStatus(isBusy) {
  var msg = isBusy ? 'busy' : 'available';
  return {
    status: msg,
  };
}

//12

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

//13

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
}

//14

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
}

//15

function mango(quantity, price) {
  let totalCost = 0;
  while (quantity > 0) {
    if (quantity > 2) {
      quantity -= 3;
      totalCost += 2 * price;
    } else {
      totalCost += price;
      quantity -= 1;
    }
  }
  return totalCost;
}
