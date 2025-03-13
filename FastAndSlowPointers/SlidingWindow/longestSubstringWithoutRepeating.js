function findLongestSubstring(s) {
    let left = 0;
    let right = 0;
    let maxWindowLength = 0;

    let chars = s.split('');
    let set = new Set();

    for (right = left; right < chars.length; right++) 
    {
        if (set.has(chars[right])) {
            
            while (set.has(chars[right])) {
                set.delete(chars[left]);
                left++;
            }
        }

        set.add(chars[right]);
        maxWindowLength = Math.max(maxWindowLength, set.size);
    }

    return maxWindowLength;
}

export { findLongestSubstring };