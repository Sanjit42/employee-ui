import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {browserHistory, Router} from 'react-router';
import routes from './routes';
import {loadHomeOffices} from "./actions/homeOfficesActions";
import {loadEmployees} from "./actions/employeeActions";
import {loadGender} from "./actions/genderActions";
// import {loadRating} from "./actions/ratingActions";
import {loadSkillsAndAbilities} from "./actions/skillsAndAbilitiesActions";
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadHomeOffices());
store.dispatch(loadEmployees());
store.dispatch(loadGender());
// store.dispatch(loadRating());
store.dispatch(loadSkillsAndAbilities());

render(
  <Provider store={store}>
    < Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
