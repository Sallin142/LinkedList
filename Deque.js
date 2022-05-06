const DoublyLinkedList = require('./DoublyLinkedList.js');

class Card{
    constructor(number = null, suit = null){
        this.number = number;
        this.suit = suit;
    }
}

class Deque extends DoublyLinkedList{
    constructor(){
        super();
        for(let i = 1; i <= 13; i++){
            let num = i;
            if(i == 1){
                num = "Ace";
            }else if(i == 11){
                num = "Jack";
            }else if(i == 12){
                num = "Queen";
            }else if(i == 13){
                num = "King";
            }
            super.addToHead(new Card(num, "Hearts"));
            super.addToHead(new Card(num, "Dimonds"));
            super.addToHead(new Card(num, "Clubs"));
            super.addToHead(new Card(num, "Spades"));
        }
    }
    popFromTop(){
        return super.removeFromHead();
    }
    popFromBottom(){
        return super.removeFromTail();
    }
    pushFromTop(val){
        super.addToHead(val);
    }
    pushFromBottom(val){
        super.addToTail(val);
    }
    shuffle(times){
        for(let i = 0; i < times; i++){
            for(let j = 0; j < this.currentSize; j++){
                super.swap(Math.floor(Math.random() * this.currentSize)+1,Math.floor(Math.random() * this.currentSize)+1);
            }
        }
    }
    printDeque(){
        super.printDoublyLinkedList();
    }
}

module.exports = Deque;