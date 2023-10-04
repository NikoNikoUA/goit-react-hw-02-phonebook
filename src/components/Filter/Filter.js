import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label className={css.labelFilter}>
        Find contacts by name
        <input
          className={css.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};
