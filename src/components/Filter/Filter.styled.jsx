import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  background-color: rgb(8, 8, 8);
  width: 40%;
  padding: 20px;
  margin: 0 3% 20px;
  border-radius: 10px;
  border: 2px solid rgb(53, 202, 8);
`;

export const Text = styled.span`
  margin-left: 20px;
  margin-bottom: 5px;
  letter-spacing: 5px;
  font-size: 15px;
`;

export const Input = styled.input`
  height: 35px;
  padding: 10px 25px;

  background: transparent;
  border-radius: 10px;
  // box-shadow: -2px -2px 8px rgb(53, 202, 8) inset;
  border: 2px solid rgb(53, 202, 8);
  outline-color: rgb(53, 202, 8);

  font-size: 20px;
  color: rgb(240, 240, 240);
  text-shadow: 0 0 1em rgb(53, 202, 8);
  font-family: monospace;
  letter-spacing: 5px;
`;
