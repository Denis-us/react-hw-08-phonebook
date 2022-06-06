import {Routes, Route} from 'react-router-dom'
import AppBar from './components/AppBar'
// import Form from "./components/Form/Form";
// import Section from "./components/Section/Section";
// import ContactList from "./components/ContactList/ContactList";
// import Filter from "./components/Filter/Filter";


export default function App() {

    return (
      
      <>
      <AppBar/>

      <Routes>
        <Route path='/register'></Route>
        <Route path='/login'></Route>
        <Route path='/contacts'></Route>
      </Routes>
        {/* <Section title={"Phonebook"}>
          <Form />
        </Section>

        <Section title={"Contacts"}>
          
        <Filter/>
        <ContactList/>
        </Section> */}
        
      </>
    );
  }
