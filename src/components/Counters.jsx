import React, { Component } from "react";
import Counter from "./Counter.jsx";

class Counters extends Component {
    render() {
        const {
            onReset,
            onIncrement,
            onDelete,
            onDecrement,
            counters,
            onRestart
          } = this.props;
        return (
            <div>
                <button
                    className="btn btn-success m-2"
                    onClick={onReset}
                    disabled={counters.length === 0 ? "disabled" : ""}
                >
                    <i className="fas fa-sync" aria-hidden="true" />
                </button>
                <button
                    className="btn btn-primary m-2"
                    onClick={onRestart}
                    disabled={counters.length === 0 ? "disabled" : ""}
                >
                    <i className="fas fa-recycle" aria-hidden="true" />                    
                </button>
                {counters.map(counter => (
                <Counter
                    key={counter.id}
                    counter={counter}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                />
                ))}
            </div>
        );
    }
}

export default Counters;