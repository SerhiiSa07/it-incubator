/*Exercise

Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

    For example n = 3 result in:*/

/*function drawStairs(n) {
    // your code here
}*/

Solution

function drawStairs(n) {
    let cnt = 0;
    let result = '';
    while(n > cnt){
        result += ' '.repeat(cnt) + 'I';
        cnt++;
        if(n > cnt) result += '\n';
    }
    return result;
// your code here
}