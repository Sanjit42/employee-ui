/* eslint-disable import/named */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import Routes from './routes';

import {loadHomeOffices} from "./actions/homeOfficesActions";
import {loadEmployees} from "./actions/employeeActions";
import {loadGender} from "./actions/genderActions";
import {loadAvatar} from "./actions/avatarActions";
import {loadSkillsAndAbilities} from "./actions/skillsAndAbilitiesActions";
// eslint-disable-next-line import/namespace
import AboutApp from './components/aboutApp/AboutPage';
import App from './App';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


const store = configureStore();
store.dispatch(loadHomeOffices());
store.dispatch(loadEmployees());
store.dispatch(loadGender());
store.dispatch(loadAvatar());
store.dispatch(loadSkillsAndAbilities());

// render(
//   <Provider store={store}>
//     < Router history={browserHistory} >
//       <Route path="/" component={AboutApp}/>
//     </Router>
//   </Provider>,
//   document.getElementById('app')
// );

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'));
