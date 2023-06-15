import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return ( 
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>  
    
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}  
