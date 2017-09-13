// $(() => {
    //js document ready
    //console.log()
const cardSuites = ['hearts', 'clubs', 'spades' , 'diamonds'];
// array of all four suites
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// array of values for card(listed as strings? strings vs strings and integers)

let deck = [];// empty array for my newCard to be stored in

function createDeck () {
    

    // empty array for my newCard to be stored in
    // is this in the right place?
    for(var x = 0; x < cardSuites.length; x++) {
        // suit loop that will run four times
        for(var y = 0; y < cardValues.length; y++) {
            // this cardValue loop will run 13 times
            // 13 individual cardValues * 4 cardSuites = 52 cards
            var newCard = {
                suite: cardSuites[x],
                value: cardValues[y]
                // once newCard is created using cardSuites and cardValues, starting at index [0]
            };
            ///deck.push(newCard);
            //console.log(deck)
                // for this array, we are going to push my newCard into deck
            


        deck.push(newCard)
        //(newCArd(cardSuites[x], cardValues[y]));




                // attach newCard to end of deck
                // use .push 


                
                
        
        }
    }
    //console.log(deck)
}
// });
