const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.queue = [];
    this.length = 0;
    this.list = null;
  }

  enqueue(value) {
    const nod = new ListNode(value);
    this.list = nod;
    const node = value;
    this.top = node;
    this.queue.push(node);
  }

  dequeue() {
    const car = this.queue.shift();
    return car;
  }
}

module.exports = Queue;
