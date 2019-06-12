import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
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
    ]
  };

  deleteContact = () => {
    console.log('delete button clicked');
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default ContactList;
