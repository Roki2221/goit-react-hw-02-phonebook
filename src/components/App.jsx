import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filtercopy from './Filter/Filtercopy';
export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSearch = value => {
    this.setState({ filter: value });
  };

  handleSubmit = data => {
    console.log('second');
    console.log(data);

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name: data.name,
          number: data.number,
          id: nanoid(),
        },
      ],
    }));
  };

  render() {
    return (
      //       <div>
      //   <h1>Phonebook</h1>
      //   <ContactForm ... />

      //   <h2>Contacts</h2>
      //   <Filter ... />
      //   <ContactList ... />
      // </div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filtercopy onChange={this.handleSearch} />
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
