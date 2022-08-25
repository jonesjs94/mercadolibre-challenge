import React from 'react';
import '@testing-library/react';
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
import mockState from './mockReducer';

const customRender = (
  ui,
  {
    initialState = mockState,
    store = createStore(reducer, initialState)
  }
) => {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };