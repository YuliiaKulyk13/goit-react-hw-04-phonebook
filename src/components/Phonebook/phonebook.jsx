import React from 'react';
import { Contact, ContactItem, DeleteButton, List } from './phonebook.styled';

const PhoneContacts = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id}>
        <ContactItem>
          {name}: {number}
        </ContactItem>
        <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
      </Contact>
    ))}
  </List>
);
export default PhoneContacts;
