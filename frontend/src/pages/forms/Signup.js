import React, { useState } from 'react';
import authService from '../../services/index';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { Button } from '../../components/Button';

const { signup } = authService;

const SignupStyled = styled.div`
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
        margin: 20px 0;
    }
    .description {
        margin: 0;
        color: ${props=>props.theme.color.color2};
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90vw;
        height: 55vh;
        padding: 2vh 0;
        input[type='text'],
        input[type='email'],
        input[type='password'] {
            width: 100%;
            height: 40px;
            background-color: transparent;
            color: white;
            border: none;
            border-bottom: 1px solid ${props=>props.theme.color.color2};
            margin: 5px 0;
            font-size: 1.1rem;
        }
        input::placeholder {
            color: white;
            font-size: 1.1rem;
        }
        &>div {
            width: 100%;
            display: flex;
            justify-content: left;
            margin: 10px 0;
            label {
                margin-left: 5px;
                font-size: .8rem;
                a {
                    font-size: .8rem;
                    font-weight: bold;
                }
            }
        }
        button {
            text-transform: uppercase;
        }
    }
    .login-social-text {
        font-weight: bold;
        font-size: .8rem;
    }
    .login-social {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        img {
            margin: 0 10px;
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
    .error-msg {
        color: ${props=>props.theme.color.color3};
        font-weight: bold;
        font-size: .7rem;
    }
    .server-msg {
        max-width: 90%;
        margin: 10px auto;
    }
`;


const Signup = ({history}) => {
    const [error, setError] = useState(null)

    return (
        <SignupStyled>
            <Link to="/home">
                <nav className="nav">
                    <img src="./images/arrow.png" alt="Flecha"/>
                    <p>Home</p>
                </nav>
            </Link>
            <h3>Crear cuenta</h3>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            { error && <div className="error-msg server-msg">{error}</div>}

            <Formik
            initialValues={{ username: '', email: '', password: '', terms: false }}
            validate={values => {
                const errors = {};
                if (!values.username) {
                errors.username = 'Necesitamos tu nombre por favor';
                } else if (!values.email) {
                errors.email = 'Necesitamos tu Email por favor';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Dirección de Email incorrecto';
                } else if (!values.password) {
                errors.password = 'Necesitas una contraseña para tu cuenta';
                } else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)
                ) {
                errors.password = 'La contraseña debe tener al menos 8 caracteres, una letra minúscula, una Mayúscula y un número';
                } else if (!values.terms) {
                    errors.terms = 'Tenés que aceptar nuestros términos y condiciones para continuar'
                }
                return errors;
            }}
            onSubmit={ async (values, { setSubmitting }) => {
                try {
                    await signup(values);
                    setSubmitting(false);
                    history.push('/confirm-email');
                } catch(err) {
                    if(err.response.status === 406) setError('Al parecer hay un error con el email o contraseña, quizás ya existe ese correo en nuestra base de datos!');
                    if(err.response.status === 500) setError('Hubo un error en el servidor, por favor intentá más tarde');
                };
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <Field
                    type="text"
                    name="username"
                    placeholder="Nombre"
                />
                <ErrorMessage name="username" component="div"  className="error-msg"></ErrorMessage>
                <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <ErrorMessage name="email" component="div"  className="error-msg"></ErrorMessage>
                <Field
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                />
                <ErrorMessage name="password" component="div"  className="error-msg"></ErrorMessage>
                <div>
                <Field 
                    type="checkbox" 
                    name="terms" 
                    id="terms"
                />
                <label htmlFor="terms">Acepto los <Link to="#">Términos y Condiciones</Link></label>
                </div>
                <ErrorMessage name="terms" component="div"  className="error-msg"></ErrorMessage>
                <Button type="submit" disabled={isSubmitting}>
                    Crear cuenta
                </Button>
                </Form>
            )}
            </Formik>

            <p className="login-social-text">Mejor, crear una cuenta con</p>
            <div className="login-social">
                <a href="/googlecb"><img src="./images/google.png" alt="Logo Google"/></a>
                <a href="/facebookcb"><img src="./images/facebook.png" alt="Logo Facebook"/></a>
            </div>
            <p className="login">Ya tenés cuenta? <Link to="/login">Login</Link></p>
            
        </SignupStyled>
    );
};

export default Signup;
