import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { Button } from '../../components/Button';

const DivStyled = styled.div`
     position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 70px;
    .nav {
        position: absolute;
        z-index: 9;
        width: 100vw;
        top: 60px;
        left: 5px;
        display: flex;
        img {
            height: 25px;
        }
        p {
            margin: 0 10px;
            font-size: 1.1rem;
        }
    }
    h3 {
        margin: 50px 0;
        font-size: 1.6rem;
    }
    .description {
        margin: 0;
        color: ${props=>props.theme.color.color2};
    }
    form {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90vw;
        padding: 5vh 0;
        input[type='email'] {
            width: 100%;
            height: 40px;
            background-color: transparent;
            color: white;
            border: none;
            border-bottom: 1px solid ${props=>props.theme.color.color2};
            margin: 20px 0;
            font-size: 1.1rem;
        }
        input::placeholder {
            color: white;
            font-size: 1.1rem;
        }
        .error-msg {
            color: ${props=>props.theme.color.color3};
            font-weight: bold;
        }
        button {
            text-transform: uppercase;
        }
    }
    .login {
        color: ${props=>props.theme.color.color2};
        font-size: .8rem;
        a {
            font-weight: bold;
            color: black;
            font-size: .8rem;
        }
    }
`;

const RecoverPassword = () => {
    return (
        <DivStyled>
           <Link to="/login">
                <nav className="nav">
                    <img src="./images/arrow.png" alt="Flecha"/>
                    <p>Login</p>
                </nav>
            </Link>
            <h3>Te olvidaste la contraseña?</h3>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Formik
            initialValues={{ email: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Necesitamos tu Email por favor';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Dirección de Email incorrecto';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <ErrorMessage name="email" component="div"  className="error-msg"></ErrorMessage>
                <Button type="submit" disabled={isSubmitting}>
                    Continuar
                </Button>
                </Form>
            )}
            </Formik>

            <p className="login">Todavía no tenés cuenta? <Link to="/signup">Crear Cuenta</Link></p> 
        </DivStyled>
    );
};

export default RecoverPassword;
