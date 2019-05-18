import * as React from 'react';
import { Container, Logo, Content } from '../styles';
import { Form, FormGroup } from '../../../styles/global-components/form';
import { Button } from '../../../styles/global-components/button';
import { Link } from '../../../styles/global-components/link';
import logoImage from '../../../assets/logo.svg';

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

        <Button type="submit" className="mb-2">Entrar</Button>
      </Form>
      
      <Link href="/cadastro">Criar conta grátis</Link>
    </Content>
  </Container>
);