import {useEffect} from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import s from './Contact.module.css'
import contactsOperations from '../../redux/contacts/contactsOperations';

const Contact = ({id, name, number}) => {

    const dispatch = useDispatch()

    return (
        <div className={s.contact}>
          <div className={s.contactInfo}>
            <p className={s.contactsData}>{name}</p>
            <p className={s.contactsData}>{number}</p>
          </div>
           
          <Button variant="contained" type="submit" className={s.button}
              onClick={() => {
                dispatch(contactsOperations.deleteContact(id))
                toast.success('Контакт удален')
              }}>
                Удалить
              </Button>
            {/* <button
              className={s.btn}
              type="button"
              // disabled={isLoading}
              onClick={() => {
                dispatch(contactsOperations.deleteContact(id))
                toast.success('Контакт удален')
              }}
            >
              Удалить
            </button> */}
        </div>     
    );
  };
  
  export default Contact