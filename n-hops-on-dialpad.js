// https://hackernoon.com/google-interview-questions-deconstructed-the-knights-dialer-f780d516f029

// [1, 2, 3]
// [4, 5, 6]
// [6, 7, 8]
// [n, 0, n]

/*
    MENTAL MODEL
    startFrom = 1;
    buttons = [startFrom];

    from the button you start check to see in which directions you can have valid moves check for
        1) 1 down 2 right  m[i+1] && m[i+1][j+2]
        2) 1 down 2 left
        3) 1 up 2 right
        4) 1 up 2 left
        5) 2 down 1 right
        6) 2 down 1 left
        7) 2 up 1 right
        8) 2 up 1 left
    if you can move
    

*/