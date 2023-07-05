import { useDispatch, useSelector } from 'react-redux';
import { turnOffEditMode } from 'redux/contacts/slice';
import { addContact, changeContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectIsEditMode,
  selectCurrentContact,
} from 'redux/contacts/selectors';
import {
  Form,
  LabelName,
  LabelNumber,
  Text,
  Input,
  Button,
  Span,
  Wrapper,
} from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const editMode = useSelector(selectIsEditMode);
  const currentContact = useSelector(selectCurrentContact);

  const handleOffEditMode = () => dispatch(turnOffEditMode());

  const handleSubmitChangedContact = e => {
    e.preventDefault();

    const form = e.target;
    const number = form.elements.number.value.trim();
    const name = form.elements.name.value.trim();
    const id = currentContact.id;

    dispatch(changeContact({ name, number, id }));
    dispatch(turnOffEditMode());
    form.reset();
  };

  const handleSubmitNewContact = e => {
    e.preventDefault();

    const form = e.target;
    const number = form.elements.number.value.trim();
    const name = form.elements.name.value.trim();
    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return editMode ? (
    <Form onSubmit={handleSubmitChangedContact} autoComplete="off">
      <LabelName>
        <Text>Enter new name</Text>
        <Input
          type="text"
          name="name"
          required
          defaultValue={currentContact.name}
        />
      </LabelName>
      <LabelNumber>
        <Text>Enter new number</Text>
        <Input
          type="tel"
          name="number"
          required
          defaultValue={currentContact.number}
        />
      </LabelNumber>
      <Wrapper>
        <Button
          type="submit"
          style={{
            marginRight: 20,
          }}
        >
          Save
          <Span />
        </Button>
        <Button type="button" onClick={handleOffEditMode}>
          Cancel
          <Span />
        </Button>
      </Wrapper>
    </Form>
  ) : (
    <Form onSubmit={handleSubmitNewContact}>
      <LabelName>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          required
          placeholder="Tiffany"
          defaultValue=""
        />
      </LabelName>
      <LabelNumber>
        <Text>Number</Text>
        <Input
          type="tel"
          name="number"
          required
          placeholder="333-33-33"
          defaultValue=""
        />
      </LabelNumber>
      <Wrapper>
        <Button type="submit">
          Add contact
          <Span />
        </Button>
      </Wrapper>
    </Form>
  );
};

export default ContactForm;
