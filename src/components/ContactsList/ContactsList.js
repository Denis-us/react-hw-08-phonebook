import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {getContacts} from '../../redux/contacts/contactsSelectors'
import {getFilter} from '../../redux/filter/filterSelectors'
import contactsOperations from '../../redux/contacts/contactsOperations'
import Contact from '../Contact'
import s from "./ContactsList.module.css"


const ContactList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)
  const contacts = useSelector(getContacts)

  useEffect(() => {
      dispatch(contactsOperations.getContacts())
  }, [dispatch, contacts])

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
          <Contact id={id} name={name} number={number}/>
        </li>
      ))}
    </ul>
    )}
    </>
  )
}

export default ContactList