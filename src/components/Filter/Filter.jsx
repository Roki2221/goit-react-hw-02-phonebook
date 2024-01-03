import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  filterInputId = nanoid();

  render() {
    return (
      <>
        <label htmlFor={this.filterInputId}>Find contacts by name</label>
        <input
          id={this.filterInputId}
          type="text"
          name="filter"
          onChange={this.handleChange}
          value={this.state.filter}
        />
      </>
    );
  }
}
