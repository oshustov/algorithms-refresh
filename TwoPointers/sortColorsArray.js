function sortColors(colors) {

    let left = 0;
    let right = colors.length - 1;
    let i = 0;

    while (i <= right) {
        let item = colors[i];
        if (item == 0)
        {
            [colors[left], colors[i]] = [colors[i], colors[left]];
            left++;
            i++;
            continue;
        }
        if (item == 2)
        {
            [colors[right], colors[i]] = [colors[i], colors[right]];
            right--;
            continue;
        }
        else { 
            i++;
        }
    }
    

    return colors;
}

export { sortColors }