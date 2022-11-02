import { ContactsListWrapper, Title, List } from './ContactList.styled';
import { useFetchContactsQuery } from 'redux/slice';
import { FaRegSadCry } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
export default function ContactList() {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    if (contacts !== undefined) {
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.filter);
      });
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactsListWrapper>
      <Title>Contacts</Title>
      {filteredContacts && filteredContacts.length > 0 && (
        <List>
          {filteredContacts.map(value => {
            return <ContactsListItem key={value.id} contact={value} />;
          })}
        </List>
      )}
      {isFetching && !filteredContacts && (
        <>
          <h3>Contact list is not ready...</h3>
        </>
      )}
      {filteredContacts && filteredContacts.length === 0 && (
        <>
          <h3>
            Contact list is empty <FaRegSadCry />
          </h3>
        </>
      )}
    </ContactsListWrapper>
  );
}
