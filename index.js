import { findSumOfThree } from './TwoPointers/twoPointers_sumOfThree.js';
import { removeNthLastNode } from './TwoPointers/removeNthElementFromTheEnd.js';
import LinkedListNode from './TwoPointers/linked_list_node.js';
import LinkedList from './TwoPointers/linked_list.js';
import { sortColors } from './TwoPointers/sortColorsArray.js';
import { circularArrayLoop } from './FastAndSlowPointers/circularArrayLoop.js';
import { findDuplicate } from './FastAndSlowPointers/findDuplicateNumber.js';
import { isHappyNumber } from './FastAndSlowPointers/happyNumber.js';
import { findRepeatedSequences } from './FastAndSlowPointers/SlidingWindow/repeatedDNA.js';

//console.log(findSumOfThree([1, 2, 3, 4, 5] , 9));
// let list = [69,8,49,106,116,112];
// let linkedList = new LinkedList();
// linkedList.createLinkedList(list);
// console.log(sortColors([0, 1, 0]));
// console.log(circularArrayLoop([1,2,-3,3,4,7,1]));
// console.log(findDuplicate([1, 2, 3, 4, 3, 3]));
// console.log(isHappyNumber(23));
console.log(findRepeatedSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", 2));