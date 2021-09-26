/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-24 10:23:41
 * @LastEditTime: 2021-09-26 10:50:38
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\707.设计链表.js
 */
/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

/**
 * 不使用数组，维护一个head指针，一个tail指针，以及链表长度length
 * @param {*} val 
 */
// // 初始化
// var Node= function(val){
//     this.val=val;
//     this.next=null;
// }

// var MyLinkedList = function(head) {
//     this.head=head;
//     this.tail=null;
//     this.length=0;
// };

// // get方法
// /**
//  * 获取链接列表中的索引节点的值。如果索引无效，则返回-1。
//  */
// MyLinkedList.prototype.get = function(index) {
//     if( index >= this.length || index < 0) return -1;
//     let idx=0;
//     var current= this.head;
//     while(current){
//         if(idx=== index) return current.val;
//         current= current.next;
//         idx++
//     }
// };

// /**
//  * 在链接列表的第一个元素之前添加值val的节点。插入后，新节点将是链接列表的第一个节点。
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
//     var node= new Node(val)
//     if(this.head){
//         node.next = this.head;
//         this.head= node;
//     } else{
//         this.head=node;
//         this.tail=this.head;
//     }
//     this.length++;
// };

// /**
//  * 将值val的节点附加到链接列表的最后一个元素。
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
//     var node= new Node(val);
//     if(this.tail) 
//         this.tail.next= node;
//     else 
//         this.head= node;
//     this.tail=node;
//     this.length++;
// }; 

// /**
//  * 在链接列表中的索引节点之前添加值val的节点。如果索引等于链接列表的长度，则该节点将附加到链接列表的末尾。如果索引大于长度，则不会插入节点。
//  */

// MyLinkedList.prototype.addAtIndex = function(index, val) {
//     if(index > this.length) return;
//     if(index === this.length) { this.addAtTail(val); return; }
//     if(index===0) {
//         this.addAtHead(val); return;
//     }    
//     let idx = 0;
//     var current = this.head;
//     while(current){
//         if(idx === index-1){
//             var node = new Node(val);
//             node.next = current.next;
//             current.next = node;
//             this.length++;
//             return;
//         }
//         current= current.next;
//         idx++;
//     }
// };

// /**
//  * 如果索引有效，则删除链接列表中的索引节点。
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//     if(index >= this.length || index <0 ) return;
//     if(index===0) {
//         this.head = this.head.next;
//         this.length--;
//         if(this.length===0) this.tail=null;
//         return;
//     }
//     let idx = 0;
//     var current= this.head;
//     while(current){
//         if(idx === index-1){
//              current.next = current.next.next ? current.next.next : null;
//              if(!current.next) {
//                 this.tail = current;
//              }
//             this.length--;
//             return;
//         }
//         current = current.next;
//         idx++
//     }
// };

var Node = function (val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function (head) {
    this.head = head;
    this.tail = null;
    this.length = 0;
}

// 查找
// 根据索引进行查找
MyLinkedList.prototype.get = function (index) {
    // 判断边界
    if (index < 0 || index >= this.length) return -1;
    let idx = 0;
    let current = this.head;//设置当前节点为头结点
    while (current) {
        if (idx === index) return current.val;
        current = current.next;
        idx++;
    }
};


// 在头结点插入，插入的是值val
MyLinkedList.prototype.addAtHead = function (val) {
    // 定义一个节点
    let node = new Node(val);
    //有头结点
    if (this.head) { 
        node.next = this.head; //将node的指针指向头结点
        this.head = node; //将此节点定义为头结点
    }
    // 没有头结点的话
    else { 
        this.head = node; //将该节点定义为头结点
        this.tail = this.head;
    }
    this.length++;
    
}

MyLinkedList.prototype.addAtTail = function (val) {
    let node = new Node(val);
    if (this.tail) {
        this.tail.next = node;
    }
    else {
        this.head = node;
    }
       
    this.tail = node;
    this.length++

}

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.length) retrun;
    if (index === this.length) {
        this.addAtTail(val);
        return;
    }
    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    let idx = 0;
    var curr = this.head;
    while (curr) {
        if (idx === index - 1) {
            var node = new Node(val);
            node.next = curr.next; //新添加的节点指向当前节点的后一个节点。
            curr.next = node; //当前节点指向新加入的
            this.length++;
            return;
        }
        curr = curr.next;
        idx++;
        
    }

}


MyLinkedList.prototype.deleteAtIndex = function (index) {
    if(index >= this.length || index < 0) return;
    if (index === 0) {
        // 删除的是第一个元素，把头指针指向后移
        this.head = this.head.next;
        this.length--;
        if (this.length === 0)
            this.tail = null;
        return;
    }
    let idx = 0;
    let curr = this.head;
    while (curr) {
        if (idx === index - 1) {
            // 如果id相等，就把当前节点的指针指向下下个节点
            curr.next = curr.next.next ? curr.next.next : null;
            if (!curr.next) {
                this.tail = curr;

            }
            this.length--;
            return;
        
        }
        curr = curr.next;
        idx++;
    }
}

// @lc code=end

