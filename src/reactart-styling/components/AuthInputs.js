import { useState } from 'react';
import styled from 'styled-components';
import { ButtonTag } from './Button';
import Input from './Input';

const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlDiv>
        <Input
          type="email" invalid={emailNotValid} label="Email"
          // dynamic inline style
          // style={{backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db',}}
          // className={emailNotValid ? 'invalid' : undefined}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          type="password" invalid={passwordNotValid} label="Password"
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </ControlDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <ButtonTag className='button' onClick={handleLogin}>Sign In</ButtonTag>
      </div>
    </div>
  );
}
