/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let lowerCase = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) 
            lowerCase += String.fromCharCode( str[i].charCodeAt()+32 );
        else lowerCase += str[i];
    }
    return lowerCase
};

/* MENTAL MODEL

    The trick here is to just check out JS charCodes/Unicodes for characters
    
    
    console.log( 'a'.charCodeAt() ) // 97
    console.log( 'A'.charCodeAt() ) // 65
    console.log( 'Z'.charCodeAt() ) // 90

    console.log( String.fromCharCode(97) ) 'a'
    
    We deduce a few things from this
    
    Uppercase starts at 65 and ends at 90
    'A'.charCodeAt() is 32 less than 'a'.charCodeAt() 
    So if charCode >= 65 && < charCode <= 90
        charCode += 32 to get lowercase
    
    So if any char is more than 


*/