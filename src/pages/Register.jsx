import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import Background from 'images/matrix.jpg';

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
    backgroundImage: ` url(${Background})`,
    backgroundSize: `500px`,
  },
};

export default function Register() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
