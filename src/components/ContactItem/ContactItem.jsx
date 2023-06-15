import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactItem = ({ id, name, number}) => {
  const dispatch = useDispatch();
  return (
    <div className={css.item}>
      <p className={css.name}>{name}:</p>
      <p className={css.number}>{number}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        aria-label="delete contact"
      >
        Delete
      </button>
    </div>
  );
}; 

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;