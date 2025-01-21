function circularArrayLoop(nums) {

    let  nextIndex = (i, steps, length) => { 
        let result = (i + steps) % length;
        if (result < 0) {
            result += length;
        }
        return result;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue;
        }

        let slow = i;
        let fast = nextIndex(i, nums[i], nums.length);
        while (nums[slow] * nums[fast] > 0 && nums[slow] * nums[nextIndex(fast, nums[fast], nums.length)] > 0) {
            if (slow == fast) {
                if (slow != nextIndex(slow, nums[slow], nums.length))
                    return true;
                break;
            }
            slow = nextIndex(slow, nums[slow], nums.length);
            fast = nextIndex(fast, nums[fast], nums.length);
            fast = nextIndex(fast, nums[fast], nums.length);
        }

        let mark = i;
        while (nums[mark] != 0 && nums[mark] * nums[nextIndex(mark, nums[mark], nums.length)] > 0) { 
            let next = nextIndex(mark, nums[mark], nums.length);
            nums[mark] = 0;
            mark = next;
        }
    }

    return false;
}

export { circularArrayLoop }