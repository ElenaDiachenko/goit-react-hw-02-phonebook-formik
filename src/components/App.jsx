import { Component } from 'react';
import { Box } from './Box';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  filterHandler = e => {
    const { value } = e.target;
    this.setState({ filter: value.toLowerCase().trim() });
  };

  filterContactList = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <Box as="section" m={4}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Box>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.filterHandler} />
          <ContactList contacts={this.filterContactList()} />
        </Box>
      </Box>
    );
  }
}
