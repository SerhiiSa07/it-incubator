//*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.*//

/*
Solution*/

function doubleChar(str) {
    return str.split('').map(x=> x +x).join('')// Your code here
}