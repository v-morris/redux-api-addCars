import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import ListCars from './components/ListCars';
import AddCars from './components/AddCars';
import { getCars } from './actions/actions';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';


const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getCars());

const App = () => (
  <Provider store={store}>
    <AddCars />
    <ListCars />
  </Provider>
)

render(<App />, document.getElementById('root'));
