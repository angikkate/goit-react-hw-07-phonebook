import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <label className={css.label}>
      <span>Find contacts by name</span>
      <input className={css.input} 
        type="text" 
        name="filter" 
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value.trim()))} />
    </label>
  );
}