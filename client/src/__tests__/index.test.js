import React from 'react';
import ReactDOM from 'react-dom';
import index from './';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<index />, div);
});