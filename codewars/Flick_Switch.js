/*
Task

Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.*/

/*
function flickSwitch(arr){

}*/


/*Solution*/

function flickSwitch(arr){
    let flickSw = true;
    return arr.map( el => el === "flick" ? flickSw = !flickSw : flickSw)
}