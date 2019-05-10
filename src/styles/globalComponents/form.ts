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

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;