import React from 'react';
import { render, screen } from "../../tests/test-utils";
import ItemList from '.';

describe('Testing of ItemList', () => {
  test('check display', () => {
    render(<ItemList />, );
    
    screen.debug();
  });
});