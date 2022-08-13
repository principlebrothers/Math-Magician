import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';

test('Correctly render the Quotes componenet', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
