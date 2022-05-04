
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
}


module.exports = LSNode;
module.exports = LinkedList;