import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Message } from './Message/Message';
import { Notify } from 'notiflix';
import { Title, TitleContact, Section, Button } from './App.styled';

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

    this.state.contacts.find(contact => contact.name === name)
      ? Notify.info(`${name} is already in contacts`, {
          position: 'center-top',
          fontSize: '20px',
          width: '450px',
          borderRadius: '4px',
          closeButton: true,
          info: {
            background: '#000000',
            color: '#ffffff',
            notiflixIconColor: 'rgba(225,225,225,0.5)',
          },
        })
      : this.setState(({ contacts }) => ({
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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  toggleMessage = () => {
    this.setState(({ showMessage }) => ({
      showMessage: !showMessage,
    }));
  };

  render() {
    const { filter, showMessage } = this.state;
    const { addContact, filterHandler, deleteContact } = this;
    const filterContactList = this.filterContactList();

    return (
      <Section>
        {showMessage && (
          <Message onClose={this.toggleMessage}>
            <TitleContact>This name is already in contacts</TitleContact>
            <Button type="button" onClick={this.toggleMessage}>
              OK
            </Button>
          </Message>
        )}
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
        <TitleContact>Contacts</TitleContact>
        <Filter value={filter} onChange={filterHandler} />
        <ContactList
          contacts={filterContactList}
          onDeleteContact={deleteContact}
        />
      </Section>
    );
  }
}
