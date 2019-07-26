import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check for empty submissions / Require fields be filled out
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    // Error handling imperfect: jsonplaceholder.typicode.com populates with erratically formatted phone numbers; error-handling has been included in AddContact but removed from EditContact to not conflict with phone-number formatted established by jsonplaceholder.typicode.com. This version allows only ten-digit numbers (without country code) to be added.
    
    if (phone.length !== 10) {
      this.setState({
        errors: {
          phone:
            'Phone is required. Please enter a ten-digit phone number with no parentheses, hyphens, or other extra characters.'
        }
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );
    // .then(response =>
    //   dispatch({ type: 'ADD_CONTACT', payload: response.data })
    // );

    dispatch({ type: 'ADD_CONTACT', payload: response.data });

    // Clear state (clear input boxes)
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header text-center">
                <strong>Add contact</strong>
              </div>
              <div className="card-body" />
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextInputGroup
                  label=" Name"
                  name="name"
                  placeholder="Enter name..."
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextInputGroup
                  label=" Email"
                  name="email"
                  type="email"
                  placeholder="Enter email..."
                  value={email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextInputGroup
                  label=" Phone"
                  name="phone"
                  placeholder="Enter phone..."
                  value={phone}
                  onChange={this.onChange}
                  error={errors.phone}
                />

                <input
                  type="submit"
                  value="Submit new contact"
                  className="btn btn-light btn-block"
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
