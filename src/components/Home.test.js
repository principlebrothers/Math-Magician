import React from 'react';
import renderer from 'react-test-renderer';
import Home from "./Home";

test('Correctly render the home componenet',() => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
})