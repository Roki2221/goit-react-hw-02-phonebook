import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  nameInputId = nanoid();
  phoneInputId = nanoid();
  filterInputId = nanoid();
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name: this.state.name,
          number: this.state.number,
          id: nanoid(),
        },
      ],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
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
        <h2>Contacts</h2>
        <label htmlFor={this.filterInputId}>Find contacts by name</label>
        <input
          id={this.filterInputId}
          type="text"
          name="filter"
          onChange={this.handleChange}
          value={this.state.filter}
        />

        {/* рендер шуканих контактів */}

        {this.state.filter === ''
          ? this.state.contacts.map(el => (
              <ul>
                <li key={el.id}>
                  {el.name}: {el.number}
                </li>
              </ul>
            ))
          : this.state.contacts.map(
              el =>
                el.name
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase()) && (
                  <ul>
                    <li key={el.id}>
                      {el.name}: {el.number}
                    </li>
                  </ul>
                )
            )}
      </div>
    );
  }
}
