import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFoundPage from './components/pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contact/Contacts';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import Test from './components/test/Test';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header branding='Contact Manager' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/contact/add' component={AddContact} />
                <Route exact path='/contact/edit/:id' component={EditContact} />
                <Route exact path='/about' component={About} />
                <Route exact path='/test' component={Test} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
