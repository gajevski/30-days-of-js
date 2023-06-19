// https://leetcode.com/problems/allow-one-function-call/description/

const once = (fn) => {
    let called = false;
    return function(...args){
        if (called) {
            return undefined;
        }
        called = true;
        return fn(...args);
    }
};