import React from 'react'

import LogInForm from './LoginForms'
import LogInByGoogleForm from './LoginByGoogleForm'
import RegistrationForm from './RegistrationForm'

const Forms = (props) => (
  <div>
    <LogInForm 
      email={props.email}
      password={props.password}
      onEmailChange={props.onEmailChange}
      onPasswordChange={props.onPasswordChange}
      onLogInClick={props.onLogInClick}
    />
    <LogInByGoogleForm 
      onLogInByGoogleClick={props.onLogInByGoogleClick}
    />
    <RegistrationForm />
  </div>
)

export default Forms