/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let emailFoundMap = {}
    
    emails.forEach((email) => {
        let parsedEmail = ''
        let address = false;
        let ignore = false;
        
        for(let i = 0; i < email.length; i++) {
            let char = email[i];
            
            if(char === '@') address = true;
            if(char === '+') ignore = true;
            if((address) || (!ignore && char !== '.') ) parsedEmail += char;            
        }
        emailFoundMap[parsedEmail] = true;
        
    })
            
    return Object.keys(emailFoundMap).length;
};

/*

    MENTAL
    
    emails = {
        
    }
    
    READING = {
        NAME: 'name',
        ADDRESS: 'address',
        NOTHING: 'nothing'
    }
            ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
    Iterate through email arr
        parsedEmail = ''
        originalEmail = arr[i] "test.email+alex@leetcode.com"
        state = READING.NAME
        
        Iterate through originalEmail
            char = originalEmail[i];
            
            if(state === READING.NAME) {
                if(char === '+') state = READING.NOTHING;
            } 
            if(char === '@') state = READING.ADDRESS;
            
            if(state !== READING.NOTHING && char !== '.') parsedEmail += char;
            
        emails[parsedEmail] = true;
        
    return Object.keys(email).length
            


*/