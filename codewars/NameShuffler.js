/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)*/


/*
Solution*/


function nameShuffler(str){
    return str.split(" ").reverse().join(" ")//Shuffle It
}