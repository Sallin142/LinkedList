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
    pushFromTop(){

    }
    pushFromBottom(){

    }
}

module.exports = Deque;