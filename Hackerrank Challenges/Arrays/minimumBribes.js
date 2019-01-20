// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribes = 0;

    for (let i = 0; i < q.length; i++) {
        if ((q[i] - 1) - i > 2) return console.log('Too chaotic');
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) bribes++;
        }
    }

    return console.log(bribes);
}

// WHITE BOARDED AND TOOK PICTURE TO 