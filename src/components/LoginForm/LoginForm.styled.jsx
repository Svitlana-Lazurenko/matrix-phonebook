import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  padding: 40px 40px 60px 40px;
  margin: 0 auto;

  background-color: rgb(8, 8, 8);
  border-radius: 10px;
  border: 2px solid rgb(53, 202, 8);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  letter-spacing: 2px;
`;

export const Text = styled.span`
  display: block;
  margin-bottom: 5px;
  margin-left: 20px;

  letter-spacing: 5px;
  font-size: 15px;
`;

export const Input = styled.input`
  height: 35px;
  padding: 10px 25px;
  margin-top: 5px;

  background: transparent;
  border-radius: 10px;
  border: 2px solid rgb(53, 202, 8);
  outline-color: rgb(53, 202, 8);

  font-size: 20px;
  color: rgb(240, 240, 240);
  text-shadow: 0 0 1em rgb(53, 202, 8);
  font-family: monospace;
  letter-spacing: 5px;
`;

export const Button = styled.button`
  height: 40px;
  margin: 30px auto 0;
  padding: 10px 20px;

  display: block;
  overflow: hidden;
  position: relative;
  transition: 0.5s;

  background-color: transparent;
  border: none;

  color: rgb(240, 240, 240);
  text-shadow: 0 0 1em rgb(53, 202, 8);
  font-size: 15px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 6px;

  :hover {
    background: rgb(3, 244, 15);
    color: rgb(240, 240, 240);
    border-radius: 5px;
    box-shadow: 0 0 5px rgb(3, 244, 15), 0 0 25px rgb(3, 244, 15),
      0 0 50px rgb(3, 244, 15), 0 0 100px rgb(3, 244, 15);
  }
`;

export const Span = styled.span`
  position: absolute;
  display: block;

  @keyframes btn-anim {
    0% {
      left: -100%;
    }

    50%,
    100% {
      left: 100%;
    }
  }

  :first-of-type {
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgb(3, 244, 15));
    animation: btn-anim 2s linear infinite;
  }
`;
