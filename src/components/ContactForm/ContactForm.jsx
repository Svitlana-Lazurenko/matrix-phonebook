import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts, deleteContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import {
  Form,
  LabelName,
  LabelNumber,
  Text,
  Input,
  Button,
  Span,
} from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const phone = form.elements.number.value.trim();
    const name = form.elements.name.value.trim();
    const isContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (isContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    console.dir(fetchContacts());
    console.dir(addContact);
    console.log(deleteContact);

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelName>
        <Text>Name</Text>
        <Input type="text" name="name" required />
      </LabelName>
      <LabelNumber>
        <Text>Number</Text>
        <Input type="tel" name="number" required />
      </LabelNumber>
      <Button type="submit">
        Add contact<Span></Span>
      </Button>
    </Form>
  );
};

export default ContactForm;
