import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id} name={name}>
        <ContactName>{name}: </ContactName>
        <ContactNumber>{number}</ContactNumber>
        <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
      </ContactItem>
    ))}
  </Box>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func.isRequired,
};
