import React, { Component } from 'react';
import ContactList from './components/ContactList';
import Header from './components/Header';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Organizer" />
          <div className="container">
            <ContactList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
