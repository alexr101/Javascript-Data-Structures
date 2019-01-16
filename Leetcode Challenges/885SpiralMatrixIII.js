/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
    // enumerator
    const DIRECTION = {
        UP: 'up',
        DOWN: 'down',
        LEFT: 'left',
        RIGHT: 'right'
    }
    
    let direction = DIRECTION.RIGHT;
    let result = [];
    let r = r0;
    let c = c0;
    
    let rightWall = c+1;
    let bottomWall = r+1;
    let leftWall = c-1;
    let topWall = r-1;
    
    while(result.length < R*C) {
    
        let insideGrid = (c > -1 && c < C) && (r > -1 && r < R)
        if( insideGrid ) result.push([r,c])

        if(direction === DIRECTION.RIGHT) {
            let touchingRightWall = c === rightWall
            if(touchingRightWall) {
                rightWall++
                direction = DIRECTION.DOWN;
            } else {
                c++;
            }
        }
        if(direction === DIRECTION.DOWN) {
            let touchingBottomWall = r === bottomWall
            if(touchingBottomWall) {
                bottomWall++
                direction = DIRECTION.LEFT;
            } else {
                r++;
            }
        }
        if(direction === DIRECTION.LEFT) {
            let touchingLeftWall = c === leftWall
            if(touchingLeftWall) {
                leftWall--
                direction = DIRECTION.UP;
            } else {
                c--;
            }
        }
        if(direction === DIRECTION.UP) {
            let touchingTopWall = r === topWall
            if(touchingTopWall) {
                topWall--
                direction = DIRECTION.RIGHT;
                c++; // direction is right now, but we can't update Col the value down here
            } else {
                r--;
            }
        }
    }
    return result;
};

/*

    MENTAL MODEL
    PSEUDO CODE...
    
      c
    r 1234
    
    // We're gonna compare to ROW position
    rightWall = 1
    leftWall = 1;
    
    // We're gonna compare to COL position
    bottomWall = 1;
    topWall = 1;
    
    // enumerator
    DIRECTION = {
        UP: 'up'
        DOWN: 'down',
        LEFT: 'left',
        RIGHT: 'right'
    }
    
    let direction = DIRECTION.RIGHT:
    result = []
    r = 0
    c = 0
    rightWall = r+1;
    bottomWall = c+1;
    leftWall = r-1;
    topWall = c-1;
    
    while(result.length !== R*C) {
    
        if(m[c][r]) result.push([r,c])

        if(direction === DIRECTION.RIGHT) {
            let touchingRightWall = [r === rightWall]
            if(touchingRightWall) {
                rightWall++
                direction = DIRECTION.DOWN;
            } else {
                r++;
            }
        } else if(direction === DIRECTION.DOWN) {
            let touchingBottomWall = [c === bottomWall]
            if(touchingBottomWall) {
                bottomWall++
                direction = DIRECTION.LEFT;
            } else {
                c++;
            }
        } else if(direction === DIRECTION.LEFT) {
            let touchingLeftWall = [r === leftWall]
            if(touchingLeftWall) {
                leftWall--
                direction = DIRECTION.UP;
            } else {
                r--;
            }
        } else if(direction === DIRECTION.UP) {
            let touchingTopWall = [r === topWall]
            if(touchingTopWall) {
                topWall--
                direction = DIRECTION.RIGHT;
            } else {
                c--;
            }
        }
    }
        
    
    [0,0], []
    
    

*/