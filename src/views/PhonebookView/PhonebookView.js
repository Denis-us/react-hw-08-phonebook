import Form from "../../components/Form";
import Section from "../../components/Section";
import ContactList from "../../components/ContactsList";
import Filter from "../../components/Filter";
import s from './PhonebookView.module.css'

export default function Phonebook() {

    return (
      
    <div className={s.container}>
        <Section title={"Phonebook"}>
            <Form />
        </Section>

        <Section title={"Contacts"}> 
            <Filter/>
            <ContactList/>
        </Section>
    </div>
)}