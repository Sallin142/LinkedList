class DLSNode{
    constructor(val, prev = null, next = null){
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.currentSize = 0;
    }

    clone(){
        if(!this.head){
            return;
        }
        let ret = new DoublyLinkedList;
        let cur = this.head;
        while(cur){
            ret.addToTail(cur.val);
            cur = cur.next;
        }
        return ret;

    }

    addToHead(val){
        let add = new DLSNode(val, null, this.head);
        if(!this.head){
            this.head = add;
            this.tail = add;
            this.currentSize++;
            return;
        }
        this.head.prev = add;
        this.head = add;
        this.currentSize++;
    }
    addToTail(val){
        let add = new DLSNode(val, this.tail, null);
        if(!this.head){
            this.head = add;
            this.tail = add;
            this.currentSize++;
            return;
        }
        this.tail.next = add;
        this.tail = add;
        this.currentSize++;
    }
    removeFromHead(){
        if(!this.head){
            return;
        }
        this.currentSize--;
        let del = this.head;
        this.head = this.head.next;
        if(this.head){
            this.head.prev = null;
        }
        return del.val;
    }
    removeFromTail(){
        if(!this.tail){
            return;
        }
        this.currentSize--;
        let del = this.tail;
        this.tail = this.tail.prev;
        if(this.tail){
            this.tail.next = null;
        }
        return del.val;
    }
    addAtIndex(val, atCard){
        if(atCard < 1 || atCard > this.currentSize+1){
            return;
        }
       
        if(atCard == 1){
            this.addToHead(val);
            return;
        }
        if(atCard == this.currentSize+1){
            this.addToTail(val);
            return;
        }

        this.currentSize++;
        let cur = this.head;
        for(let i = 1; i < atCard-1; i++){
            cur = cur.next;
        }
        let add = new DLSNode(val, cur, cur.next);
        cur.next = add;
        add.next.prev = add;

    } 
    removeAtIndex(atCard){
        if(atCard < 1 || atCard>this.currentSize){
            return;
        }
        
        if(atCard == 1){
            this.removeFromHead();
            return;
        }
        if(atCard == this.currentSize){
            this.removeFromTail();
            return;
        }
        this.currentSize--;
        let cur = this.head;
        for(let i = 1; i <= atCard-1; i++){
            cur = cur.next;
        }
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
        return cur.val;
    }
    printDoublyLinkedList(){
        let cur = this.head;
        while(cur){
            console.log(cur.val);
            cur = cur.next;
        }
        cur = this.tail;
        while(cur){
            console.log(cur.val);
            cur = cur.prev;
        }
        console.log(`This list has ${this.currentSize} items`);
    }  
}

module.exports = DLSNode;
module.exports = DoublyLinkedList;