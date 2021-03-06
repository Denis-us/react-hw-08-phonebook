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
            <p className={s.contactData}>{name}</p>
            <p className={s.contactData}>{number}</p>
          </div>
           
          <Button variant="contained" type="submit" className={s.button}
                  onClick={() => {
                  dispatch(contactsOperations.deleteContact(id))
                  toast.success('Контакт удален')
                }}>
                Удалить
              </Button>
        </div>     
    );
  };
  
  export default Contact