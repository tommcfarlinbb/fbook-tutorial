import './index.css';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

// add counter
const addCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        0,
        ...list.slice(index)
    ];
}

// remove counter
const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
}

// increment counter
const incrementCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
}

// tests
const testAddCounter = () => {
    const listBefore = [1, 2];
    const listAfter = [1, 0, 2];

    deepFreeze(listBefore)
    expect(addCounter(listBefore, 1))
        .toEqual(listAfter);
};
testAddCounter();
console.log("add counter test passed")

const testRemoveCounter = () => {
    const listBefore = [1, 0, 2];
    const listAfter = [1, 2];

    deepFreeze(listBefore)
    expect(removeCounter(listBefore, 1))
        .toEqual(listAfter);
};
testRemoveCounter();
console.log("remove counter test passed")

const testIncrementCounter = () => {
    const listBefore = [0, 1, 3];
    const listAfter = [0, 2, 3];

    deepFreeze(listBefore)
    expect(incrementCounter(listBefore, 1))
        .toEqual(listAfter);
};
testIncrementCounter();
console.log("increment counter test passed")
