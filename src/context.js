import React, { Component } from 'react';
import axios from 'axios';
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
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    // .then(response => this.setState({ contacts: response.data }));

    this.setState({ contacts: response.data });
  }

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
