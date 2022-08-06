import { Component } from 'react';
import { Box } from './Box';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <Box as="section" m={4}>
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>
    );
  }
}
