/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-30 22:42:12
 * @LastEditTime: 2022-01-30 23:28:39
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\2.List\707.设计链表.js
 */
/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

// 定义结构体
var ListNode = function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

var MyLinkedList = function (head) {
    this.head = head;
    this.tail = null;
    this.length = 0;

};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= this.length || index < 0) return -1;
    let idx = 0;
    let curr = this.head;
    while (curr) {
        if (idx === index) return curr.val;
        curr = curr.next;
        idx++
    }


};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new ListNode(val);
    if (this.head) {
        node.next = this.head; //连上
        this.head = node; // 把头节点指向刚插入的node
    } else { //如果原来没有头节点，插入的就当作头节点
        this.head = node;
        this.tail = this.head;
    }
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = new ListNode(val);
    if (this.tail) {
        this.tail.next = node;
    }
    else { //指的是空节点吧
        this.head = node;
    }
    this.tail = node; //把插入的节点当作尾节点
    this.length++;


};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.length) return;
    if (index === this.length) {
        this.addAtTail(val);
        return;
    }

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    let idx = 0;
    let curr = this.head;
    while (curr) {
        if (idx === index - 1) {
            let node = new ListNode(val);
            node.next = curr.next; //顺序必须这样，不然找不到了
            curr.next = node;
            this.length++;
            return;
        }
        curr = curr.next;
        idx++;
    }

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.length || index < 0) return;
    if (index === 0) {
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return;
    }

    let idx = 0;
    let curr = this.head;
    while (curr) {
        if (idx === index - 1) {
            curr.next = curr.next.next ? curr.next.next : null;
            if (!curr.next) { //等于最后一个节点了
                this.tail = curr;
            }
            this.length--;
            return;
        }
        curr = curr.next;
        idx++
    }

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

