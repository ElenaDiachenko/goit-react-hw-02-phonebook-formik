import { Box } from '../Box';

export const ContactList = ({ contacts }) => (
  <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} name={name}>
        <span>{name}: </span>
        <span>{number}</span>
        <button>Delete</button>
      </li>
    ))}
  </Box>
);
