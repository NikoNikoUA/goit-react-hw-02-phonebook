import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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

  onRemoveContact = (contactId) => {
     this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
    Notify.success('The contact has been successfully removed',
        {
        width: '100%',
        borderRadius: '10px',
        position: 'top',
      });
  }
  
  onAddingContact = ({name, number}) => {
    console.log({name, number});
    const contact = {
      name,
      number,
      id: nanoid(),
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    } );
    Notify.success(`${name} has been successfully added to your contacts`,
        {
        width: '100%',
        borderRadius: '10px',
        position: 'top',
      });
   }

  onFilterChange = event => {
    this.setState({ filter: event.currentTarget.value })
  }

  onFilteringContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  }
    
  render() {

    const { filter } = this.state;
  
    const filteredContacts = this.onFilteringContacts();

   return (
    <div className={css.container}>
      <div className={css.formContainer}>
<h1 className={css.mainHeading}>Phonebook</h1>
         <ContactForm onSubmit={this.onAddingContact} />
        </div>

  <h2 className={css.contactsHeating}>Contacts</h2>
       <Filter value={filter} onChange={ this.onFilterChange} />
      <ContactList contacts={filteredContacts} onRemoveContact={this.onRemoveContact} />
    </div>
  )
}
}

export default App;