// https://leetcode.com/problems/array-reduce-transformation/description/

const reduce = (nums, fn, init) => {
    let res = init;

    for (let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i])
    }

    return res;
};