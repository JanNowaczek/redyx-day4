import React from 'react'

import { connect } from 'react-redux'
import { emailChangedActionCreator, passChangedActionCreator, logInAsyncActionCreator } from '../state/auth'

import Forms from './Forms'

const Auth = (props) => (
    <div>
        {
            props._user ?
                props.children
                :
                <Forms
                    email={props.email}
                    password={props.password}

                    onEmailCharge={props._onEmailChange}
                    onPasswordChange={props._onPasswordChange}

                    onLogInClick={props._logIn}
                    onLogInByGoogleClick={() => { }}
                />
        }
    </div>
)

const mapStateToProps = state => ({
    _user: state.auth.user,
    _email: state.auth.email,
    _password: state.auth.password,
})

const mapDispatchToProps = dispatch => ({
    onEmailChange: (event) => dispatch(emailChangedActionCreator(event.target.value)),
    onPasswordChange: (event) => dispatch(passChangedActionCreator(event.target.value)),
    _logIn: () => dispatch(logInAsyncActionCreator())
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Auth)