const serialize = (arr) => {
    let str = '';
    arr.forEach((word) => {
        str += word.length + '~' + word;
    })
    return str;
}

const deserialize = (str) => {
    let result = [];
    let wordLength = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== '~') wordLength += str[i];
        else {
            wordLength = parseInt(wordLength);
            let word = str.substring(i+1, i+wordLength+1)
            result.push(word);
            i = i + wordLength;
            wordLength = 0;
        }
    }
    return result;
}


'4~word4~word'

let arr = ['we', 'have', 'a', 'very', 'complicated', 'matter', 'in', 'our', 'hands'];
let serializedStr = serialize(arr);
let deserializedStr = deserialize(serializedStr);
console.log({
    serializedStr: serializedStr,
    deserializedStr: deserializedStr
});

/*
It's pretty simple:
n is the length of the word
~ if where you stop reading n
After this you just add the word with str.substring and skip to the next n

{ serializedStr: '2~we4~have1~a4~very11~complicated6~matter2~in3~our5~hands',
  deserializedStr:
   [ 'we',
     'have',
     'a',
     'very',
     'complicated',
     'matter',
     'in',
     'our',
     'hands' ] }

*/

