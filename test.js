const LinkedList = require('./LinkedList.js');
const Stack = require('./Stack.js');
const Queue = require('./Queue.js');
// const ls1 = new LinkedList();
// ls1.addToHead(4);
// ls1.addToHead(3);
// ls1.addToHead(2);
// ls1.addToHead(1);
// ls1.addToTail(0);
// // ls1.printList();

// const ls2 = ls1.clone();
// ls1.printList();
// console.log("test2");
// ls2.printList();
// console.log("test difference");
// ls1.addToHead(8);
// ls1.printList();
// console.log("test2");
// ls2.removeFromHead();
// ls2.removeFromTail();
// ls2.printList();


// //note that js does not suppot overoaded operator

// console.log("testing stack");
// let st1 = new Stack();
// for(let i = 0; i < 10; i++){
//     st1.push(i);
// }
// st1.printStack();
// for(let i = 0; i < 10; i++){
//     console.log(st1.pop(i));
// }
// st1.printStack();
// console.log("testing clone stack");
// let st2 = new Stack();
// for(let i = 0; i < 10; i++){
//     st2.push(i);
// }
// let st3 = st2.clone();
// st2.printStack();
// st3.printStack();
// st3.pop();
// st2.printStack();
// st3.printStack();
let q1 = new Queue;

for(let i = 0; i < 10; i++){
    q1.enqueue(i);
}
let q2 = q1.clone();


q1.printQueue();
q2.printQueue();
q2.dequeue();
q1.printQueue();
q2.printQueue();