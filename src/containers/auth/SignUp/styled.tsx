import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: rgba(0, 0, 0, 0.75);

  margin: 0;
  margin-top: 20px;
  padding-bottom: 1.5rem;

  border-bottom: 1px solid #ececec;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StyledConfirmText = styled.p`
  color: #223c52;
  font-weight: 400;
  line-height: 16px;
  max-width: 600px;
  margin: 0;
  padding: 2rem 0;
  //border-top: 1px solid #ececec;
`;

export const StyledConfirmLink = styled(Link)`
  color: #dd3a21;
  font-weight: bold;
  text-decoration: none;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 2rem 0;

  border-bottom: 1px solid #ececec;

  .auth_form-btn-group {
    margin-bottom: 1.5em;
    button {
      width: 158px;
      padding-left: 0;

      &:first-child {
        margin-right: 1rem;
      }
      span {
        text-align: center;
      }
    }
  }

  input {
    max-width: 643px;
  }
  .auth_form-input {
    margin-bottom: 1rem;

    .auth_form-input:last-child {
      margin-bottom: 0;
    }
  }
  .auth_form-submit {
    margin-top: 1rem;
  }
`;
