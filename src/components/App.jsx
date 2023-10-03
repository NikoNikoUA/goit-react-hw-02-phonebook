import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import css from './App.module.css'

import ContactForm from '../components/ContactForm/ContactForm'
import { Filter } from '../components/Filter/Filter'
import {ContactList} from '../components/ContactList/ContactList'

class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  
  }
  
  onSubmitHandler = data => {
    console.log(data);
  }
  
  render() {
  const { id, name, number } = this.state.contacts;
  return (
    <div className={css.container}>
      <div className={css.formContainer}>
<h1 className={css.mainHeading}>Phonebook</h1>
        <ContactForm onSubmit={ this.onSubmitHandler} />
        </div>

  <h2 className={css.contactsHeating}>Contacts</h2>
  <Filter />
      <ContactList contacts={ this.state.contacts} />
    </div>
  )
}
}

export default App;