// Author: Alex Padilla
// Search algorithm
// On REPL: https://repl.it/repls/ExpertInternationalCybernetics
// This algorightm relies heavily on regex to match the right keywords
// Can still be further configured to apply search "modes" ie case sensitive, contains any part of the search term, etc

var searchArr = ['pro', 'Pro series', 'pro & vl series', 'proseries']

// returns regex matches of the term if found in any of the words in the arr
// case insensitive, ignores extra spaces
function search(term, arr) {
  
  if(!term.replace(/\s/g, '').length) // removes all white space
    return 'search term cannot be empty';

  var results = '';
  var regex;
  var regexStr = '';
  var terms;
  
  terms = term.match(/[^ ]+/g); // matches all non-space character sequences
  terms.map(function constructRegexTerm(term, i){
    regexStr += '^' + term; // ^ matches words that BEGIN with term
    
    if(i !== terms.length - 1)
      regexStr += '|';
  })
  
  regex = new RegExp(regexStr, "gi"); // gi = global (dont stop at first match) & ignore casing
  
  results = arr.filter(function(word){
    if(word.match(regex))
      return word;
  })
  
  if(!results.length) results = 'no results for ' + term + ' found';
  
  return results;
}

console.log( search('PRo    ', searchArr) );
console.log( search('Pro', searchArr) );
console.log( search('Pr', searchArr) );
console.log( search('', searchArr) );
console.log( search('       ', searchArr) );
console.log( search('   pro    ', searchArr) );
console.log( search('ro', searchArr) )
console.log( search('    ro', searchArr) )
console.log( search('     pri', searchArr) );

