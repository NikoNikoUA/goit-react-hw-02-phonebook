import { nanoid } from 'nanoid';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id }) => {
  return (
    <li key={(id = nanoid())} className={css.listItem}>
      {name}: {number}
    </li>
  );
};
