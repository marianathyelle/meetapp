import * as React from 'react';
import { Container, Logo, Content } from './styles';
import { Form, FormGroup } from '../../styles/globalComponents/form';
import { Button } from '../../styles/globalComponents/button';
import logoImage from '../../assets/logo.svg';

export const Login = () => (
  <Container>
    <Content>
      <Logo src={logoImage} />
      <Form>
        <FormGroup>
          <label>Email</label>
          <input placeholder="Digite seu email" />
        </FormGroup>

        <FormGroup>
          <label>Email</label>
          <input placeholder="Digite seu email" />
        </FormGroup>

        <Button type="submit">Entrar</Button>
      </Form>
    </Content>
  </Container>
);