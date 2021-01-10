
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 设置一个工作节点
    let curr = new ListNode();
    // 将工作节点指向 头部dummy节点。
    let dummy = curr;

    // 首先判断这两个链表是否为空，不为空再进行比较
    while(l1 !== null && l2 !== null){
        //这里比较l1与l2的大小，将工作指针指向小的那个数，并且需要将小的那个数的链表指针向后移
        if (l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
        }else{ // 否则就是l2的数更小，将curr.next指向l2，并且l2指针向后移动。
            curr.next = l2;
            l2 = l2.next;
        }
        //！！！！这个也很重要！！比较完之后需要将curr的指针也向后移动。
        curr = curr.next;
    }

    //还会出现一种情况，如果遍历着发现有一个遍历完了，另一个还有值。那么不为空的链表一定比之前的数都大，所以将其直接放到curr.next就可以了
    if( l1 !== null){
        curr.next = l1;
    }

    if(l2 !== null){
        curr.next = l2;
    }

    //最后将dummy节点后面的所有链表返回
    return dummy.next;


};