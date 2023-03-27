//1

let quoteSample = 'The five boxing wizards jump quickly.';
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

//2

let movieName = '2001: A Space Odyssey';
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

//3

let movieName = '2001: A Space Odyssey';
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

//4

let username = 'JackOfAllTrades';
let userCheck = /^[a-zA-Z](?:[a-zA-Z]+\d*|\d{2,})$/; // Change this line
let result = userCheck.test(username);

//5

let sample = 'Whitespace is important in separating words';
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

//6

let sample = 'Whitespace is important in separating words';
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

//7

let haStr = 'Hazzzzah';
let haRegex = /Haz{3,}zah/; // Change this line
let result = haRegex.test(haStr);

//8

let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/g; // Change this line
let result = timRegex.test(timStr);

//9

let favWord = 'favorite';
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

//10

let sampleWord = 'astronaut';
let pwRegex = /(?=\w{5,})(?=\D\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

//11

let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);

//12

let output =
  'Get this to show once in the freeCodeCamp console and not at all in the browser console';
console.log(output);
console.clear();

//13

let seven = 7;
let three = '3';
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

//14

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//15

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//16

let x = 7;
let y = 9;
let result = 'to come';

if (x == y) {
  result = 'Equal!';
} else {
  result = 'Not equal!';
}

console.log(result);

//17

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(getNine);

//18

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//19

function countToFive() {
  let firstFive = '12345';
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();

//20

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

//21

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log('Still going!');
  }
}

//22

function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertCtoF(30);

//23

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello');

//24

function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);

//25

function findLongestWordLength(str) {
  str = str.split(' ');
  var size = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > size) {
      size = str[i].length;
    }
  }
  return size;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

//26

function booWho(bool) {
  return bool === true || bool === false;
}

booWho(null);

//27

function titleCase(str) {
  let arr = str.split(' ');

  let newStr = '';

  for (let i = 0; i < arr.length; i++) {
    let lower = arr[i].toLowerCase();
    newStr += lower.charAt(0).toUpperCase() + lower.slice(1) + ' ';
  }

  return newStr.trim();
}

titleCase("I'm a little tea pot");

//28

function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n + i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//29

function bouncer(arr) {
  return arr.filter(function (v) {
    return !!v;
  });
}

bouncer([7, 'ate', '', false, 9]);

//30

function getIndexToIns(arr, num) {
  if (arr.indexOf(num) === -1) {
    arr.push(num);
  }

  var newArr = arr;

  function sortNumber(a, b) {
    return a - b;
  }

  newArr.sort(sortNumber);

  return newArr.indexOf(num);
}

getIndexToIns([40, 60], 50);

//31

function mutation(arr) {
  var item1 = arr[0].toLowerCase();
  var item2 = arr[1].toLowerCase();

  for (var i = 0; i < item2.length; i++) {
    var match = item1.indexOf(item2[i]);

    if (match === -1) {
      return false;
    }
  }

  return true;
}

mutation(['hello', 'hey']);

//32

function chunkArrayInGroups(arr, size) {
  var results = [];
  while (arr.length) {
    results.push(arr.splice(0, size));
  }
  return results;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

//33

let dog = {
  name: 'courage',
  numLegs: 2,
};

//34

let dog = {
  name: 'Spot',
  numLegs: 4,
};
console.log(dog.name);
console.log(dog.numLegs); // Only change code below this line

//35

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + dog.numLegs + ' legs.';
  },
};

dog.sayLegs();

//36

function largestOfFour(arr) {
  let answer = [];
  // Go through each array using bracket notation to access them:
  // arr[i]. Use Math.max() to pick out the largest number in each
  // array. The spread operator "..." will make the elements
  // of arr[i] be the arguments of Math.max().
  // We are pushing each highest number to our answer array.
  for (let i = 0; i < arr.length; i++) {
    answer.push(Math.max(...arr[i]));
  }
  // Return answer, the array of the largest numbers.
  return answer;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

//37

function confirmEnding(str, target) {
  var newStr = '';

  newStr = str.substring(str.length - target.length);

  return newStr === target;
}

confirmEnding('Bastian', 'n');

//38

function repeatStringNumTimes(str, num) {
  let newStr = '';

  // with a 'for' loop
  //   for (i = 0; i < num; i++) {
  //     newStr += str;
  //   }

  // with a 'while' loop
  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}

repeatStringNumTimes('abc', 3);

//39

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + '...';
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

//40

let str = 'one two three';
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = '$3 $2 $1'; // Change this line
let result = str.replace(fixRegex, replaceText);

//41

let hello = '   Hello, World!  ';
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/; // Change this line
let result = hello.replace(wsRegex, '$2'); // Change this line

//42

let a = 5;
let b = 1;
a++;
console.log(a); // Only change code below this line

let sumAB = a + b;
console.log(sumAB);

//43

let output =
  'Get this to show once in the freeCodeCamp console and not at all in the browser console';
console.log(output);
console.clear();

//44

let ohStr = 'Ohhh no';
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

//45

let myString = 'Eleanor Roosevelt';
let myRegex = /(Franklin D.|Eleanor) Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

//46

let repeatNum = '42 42 42';
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
result = repeatNum.match(reRegex);

//47

function findElement(arr, func) {
  let num = 0;
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

//48

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

booWho(null);

//49

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + this.numLegs + ' legs.';
  },
};

dog.sayLegs();

//50

let yourArray = ['thirty', 2007, true, 26, 'love'];
// Change this line

//51

let myArray = ['a', 'b', 'c', 'd'];
let ourVariable = myArray[0]; // Only change code below this line
myArray[1] = 'not b anymore';
// Only change code above this line
console.log(myArray);

//52

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three'); // Only change code below this line
  arr.push(7, 'VIII', 9); // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

//53

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

//54

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4); // Only change code below this line

// Only change code above this line
console.log(arr);

//55

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick',
  ])
);

//56

function forecast(arr) {
  // Only change code below this line
  return arr.slice(2, 4);
}
// Only change code above this line
console.log(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])
);

//57

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

//58

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence;
  sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());

//59

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//60

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

//61

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], //level 2
  [
    ['loop', 'shift', 6, 7, 1000, 'method', 'deep'], //level 3
    [
      ['concat', false, true, 'deeper', 'spread', 'array'], //level 4
      [
        ['deepest', 'mutate', 1327.98, 'splice', 'slice', 'push'], //level 5
      ],
    ],
  ],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
  // Only change code above this line
];

//62

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line
foods.bananas = 13;
foods['grapes'] = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);

//63

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

//64

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory('apples'));

//65

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
delete foods.foods;
// Only change code above this line

console.log(foods);

//66

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  return 'Alan' in userObj &&
    'Jeff' in userObj &&
    'Sarah' in userObj &&
    'Ryan' in userObj
    ? true
    : false;
  // Only change code above this line
}

console.log(isEveryoneHere(users));

//67

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      count++;
    }
  }
  return count;
}
// Only change code above this line

console.log(countOnline(users));

//67

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));

//68

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: ['Sam', 'Kira', 'Tomo'],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

//69


