function longestRepeatingCharacterReplacement(s, k) {
    let left = 0;
    let right = 0;
    let windowLength = 0;
    let maxWindowLength = 0;
    let currentChar = '';
    let mainCharCount = 0;

    let chars = s.split('');
    let map = new Map();

    for (right = left; right < chars.length; right++) 
    {
        map[chars[right]] = (map[chars[right]] || 0) + 1;
        currentChar = chars[right];
        windowLength++;

        mainCharCount = Math.max(mainCharCount, map[currentChar]);

        if (windowLength - mainCharCount > k) {
            map[chars[left]]--;
            left++;
            windowLength--;
        }

        maxWindowLength = Math.max(maxWindowLength, windowLength);
    }

    return maxWindowLength;
}

export { longestRepeatingCharacterReplacement };