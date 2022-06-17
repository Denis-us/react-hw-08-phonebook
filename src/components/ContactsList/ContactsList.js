import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {getContacts} from '../../redux/contacts/contactsSelectors'
import {getFilter} from '../../redux/filter/filterSelectors'
import contactsOperations from '../../redux/contacts/contactsOperations'
import Contact from '../Contact'
import Modal from '../Modal/Modal';
import s from "./ContactsList.module.css"


const ContactList = () => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)
  const contacts = useSelector(getContacts)

  useEffect(() => {
      dispatch(contactsOperations.getContacts())
  }, [dispatch, contacts])

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const filteredContacts = (contacts, filter) => {
    return contacts?.filter(contact => (
    contact.name.toLowerCase().includes(filter.toLowerCase())))
  }

  const filterContacts = filteredContacts(contacts, filter);

  // <div id="modal-root"></div>

  return (
    <>
    <button type="button" onClick={toggleModal}>Открыть модалку</button>
    {showModal && <Modal>
        <Contact/>
        <button onClick={toggleModal}>Закрыть</button>
      </Modal>}

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