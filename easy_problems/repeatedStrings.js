function repeatedString(s, n) {
    let letterKeys = {}
    let numAPerStr = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            letterKeys[`a${i}`] = i;
            numAPerStr += 1;
        }
    }

    let numRepeatedStr = Math.floor(n / s.length);
    let leftover = (n % s.length) - 1;
    let leftOverAs = 0;

    for (let k in letterKeys) {
        if (leftover >= 0 && letterKeys[k] <= leftover) {
            leftOverAs += 1;
        } else if (leftover < 0 && letterKeys[k] < n) {
            leftOverAs += 1;
        }
    }

    if (numAPerStr === 0) {
        return 0;
    } else {
        return ((numAPerStr * numRepeatedStr) + leftOverAs)
    }

}