/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  const arr = [];
  let tmp = l;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== k) {
      res.push(arr[i]);
    }
  }
  let obj = { next: null };
  for (let i = res.length; i; i -= 1) {
    obj.value = res.pop();
    obj = { next: obj };
  }
  obj = obj.next;
  return obj;
}

module.exports = removeKFromList;
