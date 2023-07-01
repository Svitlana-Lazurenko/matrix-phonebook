import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} name={name} phone={phone} id={id} />
      ))}
    </List>
  );
};

export default ContactList;
