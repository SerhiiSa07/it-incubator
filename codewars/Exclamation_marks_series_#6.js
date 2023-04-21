/*
Remove n exclamation marks in the sentence from left to right. n is positive integer.*/

function remove(s,n){
    //coding and coding....
    let input = s;
    while (n) {
        input = input.replace(/!/, "");
        n-=1;
    }
    return input;

}