import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Useremail = styled.p`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 4px;
`;

export const Button = styled.button`
  height: 40px;
  margin: 0 auto;
  padding: 10px 20px;

  transition: 0.5s;

  color: rgb(240, 240, 240);
  font-size: 15px;
  font-family: monospace;
  letter-spacing: 2px;

  background-color:  rgb(53, 202, 8) ;
  border-radius: 5px;
  border: none;

  :hover {
    background: rgb(240, 240, 240);
    color: rgb(8, 8, 8);
`;
