// https://leetcode.com/problems/counter-ii/

const createCounter = (init) => {
    let count = init;
    const increment = () => {
        return ++count;
    }

    const decrement = () => {
        return --count;
    }

    const reset = () => {
        count = init
        return count;
    }

    return {increment, decrement, reset};
};