function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  let res = new ListNode(0, head);
  let dummy = res;

  for (let i = 0; i < n; i++) {
    head = head.next;
  }

  while (head) {
    head = head.next;
    dummy = dummy.next;
  }

  dummy.next = dummy.next.next;

  return res.next;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5, 6], 2));
