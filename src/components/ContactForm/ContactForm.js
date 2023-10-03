import React, { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    number: '',
    name: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={css.form}>
        <label className={css.labelName}>
          Name
          <input
            className={css.inputName}
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label className={css.labelTel}>
          Number
          <input
            className={css.inputTel}
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>
        <button className={css.btnAddContact} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
