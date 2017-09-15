$(() => {


    const cardSuites = ['hearts', 'clubs', 'spades', 'diamonds'];
    const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck = [];
    const playerHand = [];
    const dealerHand = [];


    let totalWorthP = 0;
    let totalWorthD = 0;
    const score = [];




    function counterP() {
        totalWorthP = playerHand.reduce(function (whatever, asif) {
            return whatever + asif.worth;
        }, 0)
        console.log(totalWorthP);
    }
    function counterD() {
        totalWorthD = dealerHand.reduce(function (whatever, asif) {
            return whatever + asif.worth;
        }, 0)
        console.log(totalWorthD);
    }

    function createDeck() {
        for (var x = 0; x < cardSuites.length; x++) { // suit loop that will run four times
            for (var y = 0; y < cardValues.length; y++) {
                const cardValue = cardValues[y];
                let worth = parseInt(cardValue);
                if (cardValue === "J" || cardValue === "Q" || cardValue === "K") {
                    worth = 10;
                }

                if (cardValue === "A") {
                    worth = 11;
                }
                let card = {
                    suit: cardSuites[x],
                    value: cardValue,
                    worth: worth
                }
                deck.push(card);


            }

        }
        return deck;
    }

    function deal() {
        for (var i = 0; i < 2; i++) {
            playerHand.push(deck[Math.floor(Math.random() * deck.length)]);//generates random card between 0 and 52
            dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);//generates random card between 0 and 52
        }
        console.log(playerHand)//DO NOT DELETE THESE LINES OF CODE
        console.log(dealerHand)
    }

    $("#deal").on("click", function () {
        console.log("i work");
        createDeck();
        deal();
        counterP();
        counterD();
        handResult();
    });






    function dealOneCard() {
        playerHand.push(deck[Math.floor(Math.random() * deck.length)]);

    }

    $("#hit").on("click", function () {
        console.log("i work");
        //deal(); 
        dealOneCard();
        counterP();
        console.log(playerHand);
        counterD();
        console.log(dealerHand);
        handResult();
    });


    function dealAnotherCard() {

        dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);

    }


    function handResult() {
        if (totalWorthP === 21 && totalWorthD === 21) {
            console.log("tie");
        } else if (totalWorthD === 21) {
            console.log("Dealer wins!")
        } else if (totalWorthP === 21) {
            console.log("You Win!")
        } else if (totalWorthD === 17) {
            console.log("hit or stay player?");
        } else if (totalWorthD > 21) {
            console.log("dealer busts, player wins!")
        } else if (totalWorthP > 21) {
            console.log("You bust!")
        } else if (totalWorthP < 21) {
            console.log("You're under 21. Do you want hit!?")
        }
    }

    $("#stay").on("click", function () {
        // deal();
        //dealOneCard();
        dealAnotherCard()
        counterP();
        console.log(playerHand);
        counterD();
        console.log(dealerHand);

        handResult();

    })
});

