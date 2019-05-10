import styled from 'styled-components';
import { theme } from '../theme';

export const Button = styled.button`
  background-color: ${theme.colors.main};
  color: ${theme.colors.text};
  padding: 10px 30px;
  width: 100%;
  border-radius: 50px;
  border-color: ${theme.colors.main};

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;