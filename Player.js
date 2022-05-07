class Player{
    constructor(maxHandSize = 52){
        this.hand = [];
        this.maxHandSize = maxHandSize;
        this.handSize = 0;
    }
    addToHand(val){
        if(this.handSize === this.maxHandSize){
            console.log("Hand Full!");
            return;
        }
        this.handSize++;
        this.hand.push(val);
    }
    removeFromHand(cardNumber){
        if(this.handSize === 0){
            console.log("Hand Empty!");
            return;
        }
        this.handSize--;
        return this.hand.splice(cardNumber-1)[0];
    }
    showHand(){
        for(let i = 0; i < this.handSize; i++){
            console.log(this.hand[i]);
        }
    }
}

module.exports = Player;