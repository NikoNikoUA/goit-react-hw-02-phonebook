import React, { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    number: '',
    name: '',
  };

  onInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.onFormSubmit}>
        <label className={css.labelName}>
          Name
          <input
            className={css.inputName}
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.onInputChange}
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
            onChange={this.onInputChange}
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
