

// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
    let including = 0
    let excluding = 0

    // loop through array
    arr.forEach((n) => {
        let prevIncluding = including;
        including = Math.max(excluding + n, prevIncluding)
        excluding = prevIncluding
    });

    return including;
}

/*
    MENTAL MODEL

    including and excluding start at 0

    TEST
    1 3 4 5
          X       
    prevIncluding = 5
    including = 8
    excluding = 5

    loop through array
        prevIncluding = including;
        including = max(excluding+n, prevIncluding)
        excluding = prevIncluding

    return including;



*/