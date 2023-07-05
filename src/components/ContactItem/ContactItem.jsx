import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { turnOnEditMode, turnOffEditMode } from 'redux/contacts/slice';
import { Item, Text, Button, Wrapper } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleOnEditMode = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return dispatch(turnOnEditMode({ id, name, number }));
  };
  const handleDelete = () => {
    dispatch(deleteContact(id));
    dispatch(turnOffEditMode());
  };

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Wrapper>
        <Button type="button" onClick={handleOnEditMode}>
          Change
        </Button>
        <Button type="button" onClick={handleDelete}>
          Delete
        </Button>
      </Wrapper>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
