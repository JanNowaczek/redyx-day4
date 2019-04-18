import React from 'react'

const Auth = (props) => (
    <div>
        {
            props_user ?
                props.children
                :
                <Forms />
                    email={''}
                    password={''}

                    onEmailCharge={() => { }}
                    onPasswordChange={() => { }}

                    onLogInClick={() => { }}
                    onLogInByGoogleClick={() => { }}
                    

        }
    </div>
)

export default Auth