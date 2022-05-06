//git add .
//git commit -m ""
//git push origin head:master
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
    clone(){
        if(!this.head){
            return;
        }
        let ret = new LinkedList;
        ret.addToHead(this.head.val);
        let cur = this.head.next;
        let it = ret.head;
        while(cur){
            it.next = new LSNode(cur.val);
            cur = cur.next;
            it = it.next;
        }
        return ret;
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
    removeFromHead(){
        if(!this.head){
            //throw error
            return;
        }
        
        let ret = this.head.val;
        this.head = this.head.next;
        return ret;

    }
    removeFromTail(){
        if(!this.head){
            //throw error
            return;
        }
        
        let cur = this.head;
        let del = this.head.next;
        if(!del){
            this.head = null;
            return cur.val;
        }
        while(del.next){
            cur = cur.next;
            del = del.next;
        }
        cur.next = null;
        return del.val;

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