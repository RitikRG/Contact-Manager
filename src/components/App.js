import React, {useState} from 'react'; 
import './App.css';
import Header from './Header';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
    const [contacts, setContacts] = useState([]);
    const addContactHandler =(contact)=>{
        setContacts([...contacts, contact])
    }
  return (
    <>
        <div>
            <Header />
            <AddContact addContactHandler={addContactHandler}/>
            <ContactList contacts={contacts}/>
        </div>    
    </>
  );
}

export default App;
