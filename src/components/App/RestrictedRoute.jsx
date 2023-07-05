import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from 'hooks';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default RestrictedRoute;
