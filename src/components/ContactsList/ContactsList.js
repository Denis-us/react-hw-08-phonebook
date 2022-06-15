import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import contactsOperations from '../../redux/contacts/contactsOperations'
import Contact from '../Contact'
import s from "./ContactsList.module.css";


const ContactList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const contacts = useSelector(state => state.contacts.contacts)


  useEffect(() => {
      dispatch(contactsOperations.getContacts())
  }, [dispatch])

  

  const filteredContacts = (contacts, filter) => {
    return contacts?.filter(contact => (
    contact.name.toLowerCase().includes(filter.toLowerCase())))
  }

  const filterContacts = filteredContacts(contacts, filter);

  

  return (
    <>
    {contacts.length > 0 && (
      <ul className={s.contactsList}>
      {filterContacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactsElement}>
          {/* <Contact id={id} name={name} number={number}/> */}
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
              </div>
        </li>
      ))}
    </ul>
    )}
    </>
    
    
  );
};

export default ContactList