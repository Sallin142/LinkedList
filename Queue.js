const LinkedList = require('./LinkedList.js');

class Queue{
    constructor(){
        this.list = new LinkedList;
        this.currentSize = 0;
    }

    enqueue(val){
        this.list.addToHead(val);
        this.currentSize++;
    }
    dequeue(){
        this.currentSize--;
        this.list.removeFromTail()
    }
    clone(){
        let ret = new Queue();
        ret.list = this.list.clone();
        ret.currentSize = this.currentSize;
        return ret;
    }
    printQueue(){
        let cur = this.list.head;
        while(cur){
            console.log(cur.val);
            cur= cur.next;
        }
    }
}

module.exports = Queue;