import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Form = styled.form`
  label {
    color: ${theme.colors.text};
    font-weight: bold;
    margin-bottom: 0;
  }

  input {
    background: transparent;
    border: none;
    color: ${theme.colors.text}
  }
`;

export const Checkbox = styled.label`
  color: ${theme.colors.info} !important;
  font-weight: 400 !important;
  /* display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */

  input {
    margin-right: 10px;
  }

  /* input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked span {
      background-color: black !important; 
    }
  }

  .checkmark {
    position: absolute;
    top: 5px;
    border-radius: 2px;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: red;
  } */
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;