import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from "./Calculator";


test('should render calculator', () => {
  const calc = render(<Router><Calculator /></Router>);
  expect(calc).toMatchSnapshot();
});

test('display updates when user clicks a number', () => {
  render(<Router><Calculator /></Router>);
  expect(screen.getByText('4')).toBeInTheDocument();
  const button2 = screen.getByText('2');
  const button5 = screen.getByText('5');
  fireEvent.click(button2);
  fireEvent.click(button5);
  const display = screen.getByText('25');
  expect(display).toBeInTheDocument();
});