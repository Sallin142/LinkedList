
class LSNode{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList{
    constuctor(){
        this.head = null;
    }
    addToHead(val){
        let add = new LSNode(val, this.head);
        this.head = add;

    }
    addToTail(val){
        let add = new LSNode(val);
        if(!this.head){
            this.head = add;
            return;
        }
        let cur = this.head;
        while(cur.next){
            cur = cur.next;
        }
        cur.next = add;
    }
    printList(){
        let cur = this.head;
        while(cur){
            console.log(cur.val);
            cur = cur.next;
        }
    }
}


module.exports = LSNode;
module.exports = LinkedList;