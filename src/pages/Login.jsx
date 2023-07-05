import { Helmet } from 'react-helmet';
import LoginForm from 'components/LoginForm/LoginForm';
import Background from 'images/matrix.jpg';

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
    backgroundImage: ` url(${Background})`,
    backgroundSize: `500px`,
  },
};

export default function Login() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
