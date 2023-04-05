import React from 'react';
import { useState } from 'react';
import useLocalStorage from './Hooks/useLocalStorage';
import PhoneContacts from './Phonebook/phonebook';
import Filter from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { nanoid } from 'nanoid';
import { Layout } from './Layout/Layout.styled';

export function App() {
  const items = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useLocalStorage('contacts', items);
  const [filter, setFilter] = useState('');

  const addNewContact = (name, number) => {
    const normalizedName = name.toLowerCase();
    const checkName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );

    const addContact = {
      id: nanoid(),
      name,
      number,
    };

    return checkName
      ? alert(`${name}is already in contacts.`)
      : setContacts(prevState => [...prevState, addContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Layout>
      <Title title={'Phonebook'} />
      <ContactsForm onSubmit={addNewContact} />

      <Title title={'Contacts'} />
      <Filter value={filter} onChange={changeFilter} />

      <PhoneContacts
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Layout>
  );
}
