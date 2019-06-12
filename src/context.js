import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  // Evaluate the type of action that is passed in
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

// Create "store" for app-level state via Context
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@email.com',
        phone: '879-567-5443'
      },
      {
        id: 2,
        name: 'Karen Hurst',
        email: 'khurst@email.com',
        phone: '202-9827-8395'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    // Include entire state so it will be accessible through the app
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
