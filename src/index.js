/* eslint-disable import/named */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import {loadHomeOffices} from "./actions/homeOfficesActions";
import {loadEmployees} from "./actions/employeeActions";
import {loadGender} from "./actions/genderActions";
import {loadAvatar} from "./actions/avatarActions";
import {loadSkills} from "./actions/capabilityActions";
import App from "./App";

import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import './fontawesome'


const store = configureStore();
store.dispatch(loadHomeOffices());
store.dispatch(loadEmployees());
store.dispatch(loadGender());
store.dispatch(loadAvatar());
store.dispatch(loadSkills());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'));
