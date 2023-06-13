// https://leetcode.com/problems/create-hello-world-function/

const createHelloWorld = () => {
    return function(...args) {
        return "Hello World";
    }
};
