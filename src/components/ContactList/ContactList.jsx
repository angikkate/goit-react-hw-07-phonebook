import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && 'Loading...'}
      {!filteredContacts?.length && !error && !isLoading && (
        <p>No contacts found</p>
      )}
        <ul className={css.itemList}>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li className={css.item}>
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
              </li>
            );
          })}
        </ul>
    </>    
  );
}

export default ContactList;