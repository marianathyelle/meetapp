import * as React from 'react';
import { Container, Logo, Content } from '../styles';
import { Form, FormGroup, Checkbox } from '../../../styles/global-components/form';
import { Button } from '../../../styles/global-components/button';
import { Link } from '../../../styles/global-components/link';
import logoImage from '../../../assets/logo.svg';

import { connect } from 'react-redux';
import { AplicationState } from '../../../store';
import { bindActionCreators, Dispatch } from 'redux';
import * as RegisterActions from '../../../store/ducks/register/actions';
import { RequestData } from '../../../store/ducks/register/types';

export interface RegisterProps {
  loadRequest: (data: RequestData) => void;
  loading: boolean;
}

interface RegisterStateComponent {
  name: string;
  email: string;
  password: string;
  preferences: string[];
}

class Register extends React.Component<RegisterProps, RegisterStateComponent> {
  state: RegisterStateComponent = {
    name: "",
    email: "",
    password: "",
    preferences: [],
  }

  handlePreferences = (target: EventTarget & HTMLInputElement) => {
    if(target.checked) {
      this.setState({ preferences: [...this.state.preferences, target.value] })
    } else {
      const selectedTargets: string[] = this.state.preferences.filter(item => item !== target.value)
      this.setState({ preferences: selectedTargets })
    }
  }

  askToRegisterUser = (event: React.FormEvent) => {
    event.preventDefault();

    const userData: RequestData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      preferences: this.state.preferences.join()
    }
    
    this.props.loadRequest(userData);
  }

  render() {
    const preferences: string[] = ["Front-end", "Back-end", "Mobile", "DevOps", "Gestão e Marketing"];

    return (
      <Container>
        <Content>
          <Logo src={logoImage} />
          <Form onSubmit={this.askToRegisterUser}>
            <FormGroup>
              <label>Nome</label>
              <input 
                type="text" 
                value={this.state.name} 
                placeholder="Digite seu nome"
                onChange={(event) => this.setState({ name: event.target.value })} 
              />
            </FormGroup>

            <FormGroup>
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Digite seu email"
                value={this.state.email} 
                onChange={(event) => this.setState({ email: event.target.value })} 
              />
            </FormGroup>

            <FormGroup className="mb-4">
              <label>Senha</label>
              <input 
                type="password" 
                placeholder="Digite sua senha" 
                value={this.state.password}
                onChange={(event) => this.setState({ password: event.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <label className="mb-2">Preferências</label>
              {preferences.map(preference => (
                <FormGroup key={preference}>
                  <Checkbox>
                    <input 
                      type="checkbox" 
                      name={preference} 
                      value={preference}
                      onChange={(event) => this.handlePreferences(event.target)}
                    />
                    <span className="checkmark"></span>
                    {preference}
                  </Checkbox>
                </FormGroup>
              ))}
            </FormGroup>

            <Button type="submit" className="mb-2">Criar conta</Button>
            {this.props.loading && <span>Loading...</span>}
          </Form>
          
          <Link href="/login">Já tenho conta</Link>
        </Content>
      </Container>
    )
  }
};

const mapStateToProps = (state: AplicationState) => ({
  loading: state.register.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(RegisterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register);