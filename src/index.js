import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import expect from 'expect';

class Decrementer extends React.Component {
    render() {
        return (
            <button className="counter-button decrementer" onClick={() => this.props.onClick()}>-</button>
        );
    }
}

class Incrementer extends React.Component {
    render() {
        return (
            <button className="counter-button incrementer" onClick={() => this.props.onClick()}>+</button>
        );
    }
}

class CounterText extends React.Component {
    render() {
        return (
            <span>Current Value: {this.props.value}</span>
        );
    }
}

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {currentCount: 0};
    }

    decrement = () => {this.setState({currentCount: this.state.currentCount - 1})}
    
    increment = () => {this.setState({currentCount: this.state.currentCount + 1})}
    
    render() {
        return (
            <div className="counter">
                <Decrementer onClick={() => this.decrement()}/>
                <Incrementer onClick={() => this.increment()}/>
                <CounterText value={this.state.currentCount} />
                <ol>{/* TODO */}</ol>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// increment test
expect(counter(0, { type: 'INCREMENT' }))
    .toEqual(1);
console.log("Test 1 complete");

// decrement test
expect(counter(1, { type: 'DECREMENT' }))
    .toEqual(0);
console.log("Test 2 complete");

// bad action test
expect(counter(1, { type: 'ANOTHER' }))
    .toEqual(1);
console.log("Test 4 complete");