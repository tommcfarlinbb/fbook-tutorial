import './index.css';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

// add counter
const toggleToDoCheckbox = (todo) => {
    // proposed for ES7
    // return {
        //     ...todo,
        //     checkbox: !todo.checkbox,
        // }
        
    return Object.assign({}, todo, {checkbox: !todo.checkbox});
}

// tests
const testToggleToDoCheckbox = () => {
    const todoBefore = {
        title: 'My To Do List',
        description: 'To Do List Description',
        checkbox: false,
    };
    const todoAfter = {
        title: 'My To Do List',
        description: 'To Do List Description',
        checkbox: true,
    };

    deepFreeze(todoBefore)
    expect(toggleToDoCheckbox(todoBefore))
        .toEqual(todoAfter);
};
testToggleToDoCheckbox();
console.log("toggle todo checkbox test passed")

console.log("tests passed")
