// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

const map = (arr, fn) => {
    const res = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        res[i] = fn(arr[i], i);
    }

    return res;
};