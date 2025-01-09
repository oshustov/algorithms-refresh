import LinkedList from "./linked_list.js";
import LinkedListNode from "./linked_list_node.js";

function removeNthLastNode(head, n) {
    let firstPointer = head;
    let secondPointer = head;

    for (let i = 0; i < n; i++) {
        secondPointer = secondPointer.next;
    }

    if (secondPointer == null) {
        head = head.next;
        return head;
    }

    while (secondPointer.next != null) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    firstPointer.next = firstPointer.next.next;
    return head;
}

export { removeNthLastNode };