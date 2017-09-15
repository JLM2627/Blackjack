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
        //console.log(totalWorthP);
        print(totalWorthP);
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
                    worth: worth,
                    imgsource:  "PNG-cards-1.3/"+cardValues[y] +"_of_"+cardSuites[x]+".png"
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
            $("div.putplayercardshere").append(`<img src= `+playerHand[i].imgsource +` id = "move">`);
            $("div.putdealercardshere").append(`<img src= `+dealerHand[i].imgsource +` id= "move">`);
            
            // append card where the index of the array is i. ex dealerhand[i].imgsource, using jQuery
        }
        console.log(playerHand)//DO NOT DELETE THESE LINES OF CODE
        console.log(dealerHand)
    }

    $("#deal").on("click", function () {
        console.log("i work 1");
        createDeck();
        deal();
        counterP();
        //alert(playerHand);
        counterD();
        //alert(dealerHand);
        console.log(dealerHand)
        handResult();
    });






    function dealOneCard() {
        playerHand.push(deck[Math.floor(Math.random() * deck.length)]);
        $("div.putplayercardshere").append(`<img src= `+playerHand[playerHand.length-1].imgsource +` id = "move">`);
       // $("div.putdealercardshere").append(`<img src= `+dealerHand[dealerHand.length-1].imgsource +` id= "hey">`);

    };

    $("#hitMe").on("click", function () {
        console.log("i work 2");
        //deal(); 
        dealOneCard();
        counterP();
        print(playerHand);
        counterD();
        print(dealerHand);
        handResult();
    });


    function dealAnotherCard() {

        dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
        //$("div.putdealercardshere").append(`<img src= `+dealerHand[dealerHand.length-1].imgsource +` id= "hey">`);

    }


    function handResult() {
        if (totalWorthP === 21 && totalWorthD === 21) { 
            setTimeout(function(){ alert("Tie! Game over!"); }, 1000);
        } else if (totalWorthD === 21) {
            setTimeout(function(){ alert("Dealer Wins!"); }, 1000);
           // alert("Dealer wins!")
        } else if (totalWorthP === 21) {
            setTimeout(function(){ alert("You win!"); }, 1000);
           // alert("You Win!")
        } else if (totalWorthD === 17) {
            setTimeout(function(){ alert("Hit or stay player!"); }, 1000);
            //alert("hit or stay player?");
        } else if (totalWorthD > 21) {
            setTimeout(function(){ alert("Dealer busts, player wins!"); }, 1000);
            //alert("dealer busts, player wins!")
        } else if (totalWorthP > 21) {
            setTimeout(function(){ alert("You lose!"); }, 1000);
            //alert("You bust!")
        } else if (totalWorthP < 21) {
            setTimeout(function(){ alert("Your score is under 21. Would you like to hit?!"); }, 1000);
            //alert("You're under 21. Do you want hit!?")
        }
        
        
    }


    $("#stand").on("click", function () {
        console.log("i work 3");
        // deal();
        //dealOneCard();
        dealAnotherCard()
        counterP();
        console.log(playerHand);
        //alert(playerHand);
        counterD();
        console.log(dealerHand);

        handResult();
        $("div.putdealercardshere").append(`<img src= `+dealerHand[dealerHand.length-1].imgsource +` id =" move" >`);

    })
});

