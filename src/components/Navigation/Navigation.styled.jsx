import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 12px;

  font-weight: 700;
  font-size: 20px;
  letter-spacing: 4px;
  color: rgb(240, 240, 240);
  text-decoration: none;

  &.active {
    color: rgb(53, 202, 8);
  }
`;
