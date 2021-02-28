import React, { useReducer, useEffect, useState } from 'react';
import styled from 'styled-components';
import { validateInputLength, validatePassword } from '../validations/index';

const LoginStyled = styled.form`

`;

const LoginForm = () => {
    const [loading, setLoading] = useState(false);

    const initialValues = {
        email: '',
        username:'',
        password:'',
        passwordConfirmation: ''
    };

    const [ formValues, setFormValues ] = useReducer(
        (curValues, newValues)=> ({...curValues, ...newValues}), initialValues
    );

    const { email, username, password, passwordConfirmation } = formValues;

    function handleFormChange(event) {
       const { name, value } = event.target;
       setFormValues({[name]: value});
       validateInputLength(value);
    };


    return (
        <LoginStyled>
            
        </LoginStyled>
    );
};

export default LoginForm;
