/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Nav from './components/Nav';
import Quotes from './components/Quotes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </Router>

      </div>
    );
  }
}

export default App;
