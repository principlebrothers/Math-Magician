/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      operation: '',
      next: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((obj) => calculate(obj, e.target.innerText));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <main>
        <section className="calculator">
          <p className="display">{(total || ' ') + (operation || ' ') + (next || ' ') || 0 }</p>
          <button type="button" id="AC" onClick={this.handleClick}>AC</button>
          <button type="button" id="+/-" onClick={this.handleClick}>+/-</button>
          <button type="button" id="%" onClick={this.handleClick}>%</button>
          <button type="button" className="operator"  id="&divide;" onClick={this.handleClick}>&divide;</button>
          <button type="button" id="7" onClick={this.handleClick}>7</button>
          <button type="button" id="8" onClick={this.handleClick}>8</button>
          <button type="button" id="9" onClick={this.handleClick}>9</button>
          <button type="button" className="operator"  id="x" onClick={this.handleClick}>x</button>
          <button type="button" id="4" onClick={this.handleClick}>4</button>
          <button type="button" id="5" onClick={this.handleClick}>5</button>
          <button type="button" id="6" onClick={this.handleClick}>6</button>
          <button type="button" className="operator"  id="-" onClick={this.handleClick}>-</button>
          <button type="button" id="1" onClick={this.handleClick}>1</button>
          <button type="button" id="2" onClick={this.handleClick}> 2 </button>
          <button type="button" id="3" onClick={this.handleClick}> 3 </button>
          <button type="button" className="operator"  id="+" onClick={this.handleClick}>+</button>
          <button type="button" className="zero"  id="0" onClick={this.handleClick}>0</button>
          <button type="button" id="." onClick={this.handleClick}>.</button>
          <button type="button" className="operator"  id="=" onClick={this.handleClick}>=</button>
        </section>
      </main>
    );
  }
}

Calculator.defaultProps = { total: 0, operations: '', next: 0 };
export default Calculator;