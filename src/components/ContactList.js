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

  deleteContact = id => {
    const { contacts } = this.state;
    // Filter out the contact to be deleted
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default ContactList;
