
/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

    You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.*/


function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2).sort((a, b) => a - b );
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            result.push(arr[i]);
        }
    }
    return result
}


function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}


/*
Jack really likes his number five: the trick here is that you have to multiply each number
by 5 raised to the number of digits of each numbers, so, for example:
*/

function multiply(number){
    return number * 5  ** String(Math.abs(number)).length//your code here
}


/*write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

    the string should start with a 1.

a string with size 6 should return :'101010'.

    with size 4 should return : '1010'.

    with size 12 should return : '101010101010'.

    The size will always be positive and will only use whole numbers.*/

//Метод 1
function stringy(size) {
    return ''.padStart(size, '10')
}

//Метод 2
function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
        str+=i%2;
    return str;
}