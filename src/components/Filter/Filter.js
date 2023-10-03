import css from './Filter.module.css';

export const Filter = () => {
  return (
    <>
      <h3 className={css.filterHeading}>Find contacts by name</h3>
      <input className={css.inputFilter} type="text"></input>
    </>
  );
};
