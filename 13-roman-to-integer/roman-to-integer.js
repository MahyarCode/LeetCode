/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const arr = [];
    for (let i = 0; i < s.length; ) {
        const next = symbols[s[i + 1]];
        const current = symbols[s[i]];

        if (i === s.length - 1) {
            arr.push(current);
            break;
        } else if (current >= next) {
            arr.push(current);
            i++;
        } else {
            arr.push(next - current);
            i += 2;
        }
    }
    const total = arr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);

    return total;
};