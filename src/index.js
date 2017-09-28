import './index.css';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

// reducer
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    checkbox: false,
                }
            ];
        default:
            return state;
    }
};

// tests
const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD',
        id: 0,
        title: 'My To Do List',
        description: 'To Do List Description',
    };
    const stateAfter = [{
        id: 0,
        title: 'My To Do List',
        description: 'To Do List Description',
        checkbox: false,
    }];

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};
testAddTodo();
console.log("add todo test passed")

console.log("tests passed")
