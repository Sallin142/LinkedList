const LinkedList = require('./LinkedList.js');

class Stack{
    constructor(){
        this.list = new LinkedList;
        this.currentSize = 0;
    }

    push(val){
        this.list.addToHead(val);
        this.currentSize++;
    }
    pop(){
        this.currentSize--;
        return this.list.removeFromHead();
    }
    peek(){
        if(!this.head){
            return;
        }
        return this.head.val;
    }
    clone(){
        let ret = new Stack();
        ret.list = this.list.clone();
        ret.currentSize = this.currentSize;
        return ret;
    }
    printStack(){
        let cur = this.list.head;
        while(cur){
            console.log(cur.val);
            cur= cur.next;
        }
    }
    

}

module.exports = Stack;