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
        case 'TOGGLE':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                } else {
                    return {
                        ...todo,
                        checkbox: !todo.checkbox
                    };
                }
            })
        default:
            return state;
    }
};

// tests
const testAddToDo = () => {
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
testAddToDo();
console.log("add todo test passed")

const testToggleToDo = () => {
    const stateBefore = [
        {
            id: 0,
            title: 'Do laundry',
            description: 'Just do it',
            checkbox: false,
        },
        {
            id: 1,
            title: 'Make bed',
            description: 'Just make it',
            checkbox: false,
        },
    ];
    const action = {
        type: 'TOGGLE',
        id: 0,
    };
    const stateAfter = [
        {
            id: 0,
            title: 'Do laundry',
            description: 'Just do it',
            checkbox: true,
        },
        {
            id: 1,
            title: 'Make bed',
            description: 'Just make it',
            checkbox: false,
        },
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
}
testToggleToDo();
console.log("toggle todo test passed")

console.log("tests passed")
