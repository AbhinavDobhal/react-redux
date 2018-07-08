import React from 'react';
import TextFieldGroup from '../../elements/TextFieldGroup';
import validateInput from '../../screens/login/Validations';
import { login } from '../../screens/login/Action';
import { connect } from 'react-redux';
import PropType from 'prop-types';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (this.isValid()) {
        this.setState({ errors: {}, isLoading: true });
        this.props.login(this.state).then(
          (res) => console.log('login',res),
      (err) => this.setState({ errors:{form:"Invalid Credentials"}, isLoading: false })
     );
      
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
{errors.form && <div className="alert alert-danger">{errors.form}</div> }
        <TextFieldGroup
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />
        <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
      </form>
    );
  }
}
LoginForm.PropType={
  login:PropType.func.isRequired
}
export default connect(null,{login})(LoginForm);