import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';
import { Label, Text, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => dispatch(setFilter(e.target.value.trim()));

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      ></Input>
    </Label>
  );
};

export default Filter;
