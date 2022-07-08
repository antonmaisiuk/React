import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: rgba(0, 0, 0, 0.75);

  margin: 0;
  padding-bottom: 1.5rem;
  //border-bottom: 1px solid #ececec;
`;

export const StyledTextSignUp = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.85);

  margin: 1.5rem 0;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  border: 1px solid #ececec;
  border-left: none;
  border-right: none;

  input {
    max-width: 643px;
  }
  .auth_form-pass {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .forgot_pass {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.75);

    margin-bottom: 1.5rem;
  }
`;
