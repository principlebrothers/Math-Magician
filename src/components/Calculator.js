import React from 'react';

function Operations() {
  return (
    <div className="operators">
      <button type="button" className="symbol" id="divide">&divide;</button>
      <button type="button" className="symbol" id="multiply">&times;</button>
      <button type="button" className="symbol" id="minus">-</button>
      <button type="button" className="symbol" id="minus">+</button>
      <button type="button" className="symbol" id="equals">=</button>
    </div>
  );
}

function Numbers() {
  return (
    <div className="numberKeys">
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="zero">0</button>
      <button type="button" className="dot">.</button>
    </div>
  );
}

function GeneralOperations() {
  return (
    <div className="controls">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
    </div>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.result = 0;
  }

  render() {
    return (
      <main>
        <section className="calculator">
          <p className="results">{ this.result }</p>
          <div className="gOpsBody">
            <GeneralOperations />
          </div>
          <div className="numBody">
            <Numbers />
          </div>
          <div className="sideOps">
            <Operations />
          </div>
        </section>
      </main>
    );
  }
}

export default Calculator;
