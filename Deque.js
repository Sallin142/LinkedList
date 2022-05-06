const DoublyLinkedList = require('./DoublyLinkedList.js');

class Deque extends DoublyLinkedList{
    constructor(){
        super();
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