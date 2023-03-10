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
