import React from 'react';
import { useState, useEffect } from 'react';
import useLocalStorage from './Hooks/useLocalStorage';
import PhoneContacts from './Phonebook/phonebook';
import Filter from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { nanoid } from 'nanoid';
import { Layout } from './Layout/Layout.styled';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    contacts.find(item => name === item.name)
      ? alert(`${name}is already in contacts.`)
      : setContacts(prevState => {
          return {
            contacts: [...prevState.contacts, contact],
          };
        });
    console.log(contact);
  };

  const deleteContact = id => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  const changeFilter = e => {
    setFilter({ filter: e.currentTarget.value });
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const filteredContacts = getFilteredContacts();
  return (
    <Layout>
      <Title title={'Phonebook'} />
      <ContactsForm onSubmit={addContact} />

      <Title title={'Contacts'} />
      <Filter value={filter} onChange={changeFilter} />

      <PhoneContacts
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Layout>
  );
}
