import { Component } from 'react';
import { Box } from './Box';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  render() {
    return (
      <Box as="section" m={4}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Box>
          <h2>Contacts</h2>
          <Box>
            <h3>Filter</h3>
            <input type="text" />
          </Box>
          <ContactsList contacts={this.state.contacts} />
        </Box>
      </Box>
    );
  }
}
