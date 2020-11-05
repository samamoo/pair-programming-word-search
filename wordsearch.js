const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalFlip = [];
    for (let i = 0; i < letters[0].length; i++) {
        verticalFlip[i] = [];
        for (let k = 0; k < letters.length; k++) {
            verticalFlip[i][k] = letters[k][i];
        }
    }
    const verticalJoin = verticalFlip.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    return false; 
}

module.exports = wordSearch;