import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  phoneInputId = nanoid();
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            id={this.nameInputId}
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
        </label>

        <label htmlFor={this.phoneInputId}>
          Number
          <input
            type="tel"
            name="number"
            id={this.phoneInputId}
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
