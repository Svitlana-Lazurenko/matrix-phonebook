import { Helmet } from 'react-helmet';
import Welcome from 'components/Welcome/Welcome';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Matrix phonebook</title>
      </Helmet>
      <Welcome />
    </div>
  );
}
