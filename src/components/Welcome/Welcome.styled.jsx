import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Wrapper = styled.div`
  height: 100vh;
  max-width: 1920px;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.h1`
  margin-left: 1%;

  font-weight: 500;
  font-size: 30px;
  letter-spacing: 4px;
  color: rgb(53, 202, 8);
  text-shadow: none;
`;

export const Text = styled.span`
  display: block;
`;

const animation = keyframes`
  0% {
      color:  rgb(53, 202, 8);
    }

    50% {
      color: transparent;
    }

    100% {
      color:  rgb(53, 202, 8);
    }
`;

export const Cursor = styled.span`
  animation-name: ${animation};
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
`;
