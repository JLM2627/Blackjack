$(() => {
    //js document ready

    const cardSuites = ['hearts', 'clubs', 'spades', 'diamonds'];
    const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck = [];
    const playerHand = [];
    const dealerHand = [];
    const player = [];
    const dealer = [];
    const score = [];
    //const card =[];

    function createDeck() {
        // let worth = 0;
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
        for (var i = 0; i < 2; i++)//
        {
            playerHand.push(deck[Math.floor(Math.random() * deck.length)]);//generates random card between 0 and 52
            dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);//generates random card between 0 and 52
        }
        console.log(playerHand)
         console.log(dealerHand)
    }
         
    $("#dealBtn").on("click", function () {
        console.log("i work");
        createDeck();
        deal();
    });

    

    
    
    function dealOneCard(){
            playerHand.push(deck[Math.floor(Math.random() * deck.length)]);
    }
            console.log(playerHand)
            console.log(dealerHand)
    

    $("#hitBtn").on("click", function () {
      console.log("i work");
        dealOneCard();
       
 

    });


});
//You could use jQuery for events. User clicks on card => run function
// stay dealer needs to be at 21. saying game is over

//.reduce
//counter
//dealertotal
//var sum = [1, 2, 3].reduce(
  //  function(total, num){ return total + num }
   // , 0)
    //function handResult() {
      //  if (playerHand === 21 && dealerHand === 21) {
        //    console.log("tie");
       // } else if (dealerHand === 21) {
            //console.log("Dealer wins!")
        //} else if (playerHand === 21) {
          //  console.log("You Win!")
       // } else if (dealerHand = 17) {
         //   console.log("hit or stay player?");
       // } else if (dealerHand > 21) {
         //   console.log("dealer busts, player wins!")
        //}
    
    //}
    
    //$("#stayBtn").on("click", function () {
      //  console.log("i work")
        //handResult();
    //}
    //$("#stayBtn").on("click", function () {
      //  console.log("i work")
        //handResult();
    //})