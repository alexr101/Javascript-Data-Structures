/*
    Given a credit card number the sum of odd & even numbers must be divisible by 10

    On even numbers you double every number. If number is more than 9, split up the int chars
    and add them.
    ie 9 = 18 = 1+8 = 9
    8 = 16 = 1+6 = 7
*/

const LuhnsValidCreditCard = (card) => {
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < card.length; i++) {
        let n = card[i];

        if(i%2 === 0) {
            n = n*2;
            if(n > 9) {
                n = parseInt( n.toString()[0] ) + parseInt( n.toString()[1] );
            }
            evenSum += n
        } else {
            oddSum += parseInt(n);
        }
    }
    console.log({
        evenSum: evenSum,
        oddSum: oddSum
    })

    return (evenSum + oddSum) % 10 === 0;
}

const cardValid = LuhnsValidCreditCard('4847352989263094');
console.log(cardValid);
