import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import { ContactListItem } from '../../components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactListItem key={(id = nanoid())} name={name} number={number} />
        );
      })}
    </ul>
  );
};
