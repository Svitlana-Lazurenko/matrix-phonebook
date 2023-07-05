import { useAuth } from 'hooks';
import Background from 'images/matrix-telephone.jpg';
import { Wrapper, Title, Text, Cursor } from './Welcome.styled';

const styles = {
  container: {
    backgroundImage: `url(${Background})`,
  },
};

const Welcome = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <Wrapper style={styles.container}>
      {isLoggedIn ? (
        <Title>
          <Text>Welcome to </Text>
          <Text>the phonebook,</Text>
          <Text>
            {user.name}...
            <Cursor>|</Cursor>
          </Text>
        </Title>
      ) : (
        <Title>
          <Text>Welcome to</Text>
          <Text>
            the phonebook...
            <Cursor>|</Cursor>
          </Text>
        </Title>
      )}
    </Wrapper>
  );
};

export default Welcome;
