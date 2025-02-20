function findRepeatedSequences(dna, k) {

    let letters = dna.split('');
    let sequences = new Map();

    let windowLeft = 0;
    let windowRight = k - 1;

    while (windowRight < letters.length) {
        let sequence = letters.slice(windowLeft, windowRight + 1).join('');
        sequences.set(sequence, (sequences.get(sequence) || 0) + 1);
        windowLeft++;
        windowRight++;
    }

    return [...sequences.entries()].filter(([k, v]) => v > 1).map(([k, v]) => k);
}

export { findRepeatedSequences };