import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Logo = styled.img`
  text-align: center;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 300px;
`;