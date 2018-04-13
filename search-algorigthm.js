// Author: Alex Padilla
// Search algorithm
// On REPL: https://repl.it/repls/ExpertInternationalCybernetics
// This algorightm relies heavily on regex to match the right keywords
// Can still be further configured to apply search "modes" ie case sensitive, contains any part of the search term, etc

var searchArr = ['pro', 'Pro series', 'pro & vl series', 'proseries']
// returns regex matches of the term if found in any of the words in the arr
// options
// caseSensitive - default false
// globalSearch - default true
function search(term, arr, options) {
  
  if(!term.replace(/\s/g, '').length) // removes all white space
    return 'search term cannot be empty';
  
  var options = (options) ? options : {};
  var caseSensitive = (typeof options.caseSensitive != 'undefined') ? options.caseSensitive : false;
  var globalSearch = (typeof options.globalSearch != 'undefined') ? options.globalSearch : true;
  var results = '';
  var regex;
  var regexSearchOptions = '';
  var regexStr = '';
  var terms;

  if(globalSearch)
    regexSearchOptions += 'g';
  if(!caseSensitive)
    regexSearchOptions += 'i';

  terms = term.match(/[^ ]+/g); // matches all non-space character sequences
  terms.map(function constructRegexTerm(term, i){
    regexStr += '^' + term; // ^ matches words that BEGIN with term
    
    if(i !== terms.length - 1)
      regexStr += '|';
  });
  
  regex = new RegExp(regexStr, regexSearchOptions); // gi = global (dont stop at first match) & ignore casing

  if(!globalSearch) {
    results = arr.find(function(word){
      return word.match(regex);
    })
    results = (typeof results == 'undefined') ? '' : results;
  } else {
    results = arr.filter(function(word){
      if(word.match(regex))
        return word;
    })
  }

  
  if(!results.length) results = 'no results for ' + term + ' found';
  
  return results;
}


var searchArr = ['pro', 'Pro series', 'pro & vl series', 'proseries']

console.log( search('PRo    ', searchArr, {
  caseSensitive: true,
  globalSearch: true
}) );
console.log( search('Pro', searchArr) );
console.log( search('Pr', searchArr) );
console.log( search('', searchArr) );
console.log( search('       ', searchArr) );
console.log( search('   pro    ', searchArr) );
console.log( search('ro', searchArr) )
console.log( search('    ro', searchArr) )
console.log( search('     pri', searchArr) );



