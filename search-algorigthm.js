// Author: Alex Padilla
// Search algorithm
// On REPL: https://repl.it/repls/ExpertInternationalCybernetics
// This algorightm relies heavily on regex to match the right keywords
// Can still be further configured to apply search "modes" ie case sensitive, contains any part of the search term, etc

// returns regex matches of the term if found in any of the words in the arr
// options
// caseSensitive: default false
// globalSearch: default true
// beginsWithTerm: default false
function search(term, arr, options) {
  
  if(!term.replace(/\s/g, '').length) // removes all white space
    return 'search term cannot be empty';
  
  var options = (options) ? options : {};
  var caseSensitive = (typeof options.caseSensitive != 'undefined') ? options.caseSensitive : false;
  var globalSearch = (typeof options.globalSearch != 'undefined') ? options.globalSearch : true;
  var beginsWithTerm = (typeof options.beginsWithTerm != 'undefined') ? options.beginsWithTerm : false;
  var results = '';
  var regex;
  var regexSearchOptions = '';
  var regexBuilderStr = '';
  var regexPerWord = ''
  var terms;
  
  if(beginsWithTerm)
    regexPerWord += '^';
  if(globalSearch)
    regexSearchOptions += 'g';
  if(!caseSensitive)
    regexSearchOptions += 'i';

  terms = term.match(/[^ ]+/g); // matches all non-space character sequences
  terms.map(function constructRegexTerm(term, i){
    regexBuilderStr += regexPerWord + term; // ^ matches words that BEGIN with term
    
    if(i !== terms.length - 1)
      regexBuilderStr += '|';
  });
  
  regex = new RegExp(regexBuilderStr, regexSearchOptions); // gi = (g)lobal (dont stop at first match) & (i)gnore casing

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

console.log( search('vl', searchArr, {
  caseSensitive: false,
  globalSearch: true,
  beginsWithTerm: false
}) );
console.log( search('Pro', searchArr) );
console.log( search('Pr', searchArr) );
console.log( search('', searchArr) );
console.log( search('       ', searchArr) );
console.log( search('   pro    ', searchArr) );
console.log( search('ro', searchArr) )
console.log( search('    ro', searchArr) )
console.log( search('     pri', searchArr) );


