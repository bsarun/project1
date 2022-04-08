import * as React from 'react';
import {
    Flex,
    TextField,
    PasswordField,
    View,
    Heading,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';
import './style.css';

const LoginForm = (props) => {
    return (
        <>
            <View><Flex direction="column" gap="1rem" className='login-form-wrapper'>
                <Heading className='login-heading' level={3}>Login</Heading>
                <TextField
                    className='login-username'
                    label="Username"
                    name="username"
                    placeholder={"Type your username"}
                    autoComplete="username"
                />
                <PasswordField
                    className='login-password'
                    label="Password"
                    name="password"
                    placeholder="Type your password"
                    autoComplete="current-password"
                />
                <Link className='forgot-password-link' to={'/forgotpassword/'}>Forgot Password?</Link>
                <Link className='amplify-button amplify-field-group__control login-link' to={'/dashboard'}>Login</Link>

            </Flex></View>
        </>
    )
};

export default LoginForm;