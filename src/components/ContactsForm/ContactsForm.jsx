import React, { Component } from 'react';
import { AddButton, Form, FormInput, Label } from './ContactsForm.styled';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name">
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </Label>
        <Label htmlFor="number">
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    );
  }
}
