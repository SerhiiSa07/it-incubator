function closeCompare(a, b, margin){
    if (!margin) {
        //When a is lower than b, return -1.
        if (a < b) return -1;
        //When a is higher than b, return 1.
        if (a > b) return 1;
        // for a === b return should be 0.
        if (a === b) return 0;
    } else {
        //When a is close to b, return 0 | close to ==> margin >= a - b
        if (margin >= Math.abs(a - b) || a === b) return 0;
        if (a < b) return -1;
        if (a > b) return 1;
    }
}
