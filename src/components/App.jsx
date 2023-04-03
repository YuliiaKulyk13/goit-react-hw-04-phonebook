import React, { Component } from 'react';
import PhoneContacts from './Phonebook/phonebook';
import Filter from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { nanoid } from 'nanoid';
import { Layout } from './Layout/Layout.styled';

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
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.state.contacts.find(item => name === item.name)
      ? alert(`${name}is already in contacts.`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, contact],
          };
        });
    console.log(contact);
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();
    return (
      <Layout>
        <Title title={'Phonebook'} />
        <ContactsForm onSubmit={this.addContact} />

        <Title title={'Contacts'} />
        <Filter value={filter} onChange={this.changeFilter} />

        <PhoneContacts
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Layout>
    );
  }
}
