// https://leetcode.com/problems/counter/description/

const createCounter = (n) => {
    let count = n;
    return function() {
        return count++;
    };
};

