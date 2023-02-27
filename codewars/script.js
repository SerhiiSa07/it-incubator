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
