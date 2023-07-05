import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, Button, Span, Text } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Text> Email</Text>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <Text> Password</Text>
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">
        Log In
        <Span />
      </Button>
    </Form>
  );
};

export default LoginForm;
