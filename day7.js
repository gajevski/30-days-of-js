// https://leetcode.com/problems/function-composition/description/

const compose = (functions) => {
	return function(x) {
        for (const fn of functions.reverse()) {
            x = fn(x);
        }
        return x;
    }
};