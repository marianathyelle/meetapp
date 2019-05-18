import styled from 'styled-components';
import { theme } from '../theme';

export const Link = styled.a`
  color: ${theme.colors.text};
  font-size: 14px;
  transition: all 0.3s;

  &:hover {
    color: ${theme.colors.main};
  }
`;