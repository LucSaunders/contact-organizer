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
        name: 'Karen Hurst',
        email: 'khurst@email.com',
        phone: '202-9827-8395'
      },
      {
        id: 2,
        name: 'Charles Mingus',
        email: 'mingus@gmail.com',
        phone: '1-800-fat-bass'
      },
      {
        id: 3,
        name: 'Patty Smith',
        email: 'PattySmith@gmail.com',
        phone: '1-800-hip-poet'
      },
      {
        id: 4,
        name: 'Mike Trout',
        email: 'trout@gmail.com',
        phone: '1-800-homerun'
      },
      {
        id: 5,
        name: 'Chris Rock',
        email: 'crock@gmail.com',
        phone: '1-800-fun-naay'
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
