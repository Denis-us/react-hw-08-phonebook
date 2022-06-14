import { useDispatch, useSelector } from 'react-redux'
import {changeFilter} from '../../redux/filter/filterSlice'
import { TextField } from '@mui/material';
import s from "./Filter.module.css"

const Filter = () => {
  const filter = useSelector(state => state.filter.filter)
  const dispatch = useDispatch()

  return (
    <div className={s.filter}>
      <TextField id="outlined-basic" label="Поиск по имени" variant="outlined"
      // <label className={s.label}>
      // Поиск по имени
      // </label>
      // <input
        className={s.textField}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  )
}

export default Filter