import React, {useState} from 'react';
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from './ContactList';
import './App.css';

function App() {
const [contacts,setcontacts]=useState([]);
  return (
   <div className='ui container'>
    <Header />
     <AddContact />
    <ContactList contacts={contacts}/> 
   </div>
  );
}

export default App;
