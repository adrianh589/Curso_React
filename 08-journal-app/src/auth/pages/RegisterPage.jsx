// El nombre de Page en LoginPage (en este caso) es para indicar
// que el componente hace referencia a toda la página como tal
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout.jsx';
import { useForm } from '../../hooks/index.js';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks.js';

const formData = {
    displayName: '',
    email: '',
    password: ''
}

const formValidations = {
    displayName: [( value ) => value.length >= 1, 'The name is required'],
    email: [( value ) => value.includes( '@' ), 'The email must have an @'],
    password: [( value ) => value.length >= 6, 'The password must have more than 6 letters'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState( false );

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

    const {
        formState,
        displayName,
        email,
        password,
        formStateValidators,
        isFormValid,
        onInputChange,
    } = useForm( formData, formValidations );

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted( true );

        if ( !isFormValid ) return;

        dispatch( startCreatingUserWithEmailPassword( formState ) );
    }

    return (
        <>
            <AuthLayout title={ 'Register' }>
                <h1>Valid Form: { isFormValid ? 'True' : 'False' }</h1>
                <form onSubmit={ onSubmit }>
                    <Grid container>
                        <Grid item xs={ 12 } sx={ { mt: 2 } }>
                            <TextField
                                label={ 'Full name' }
                                type={ 'text' }
                                placeholder={ 'Your name' }
                                fullWidth
                                name="displayName"
                                value={ displayName }
                                onChange={ onInputChange }
                                error={ formStateValidators.displayName.error && formSubmitted }
                                helperText={ formStateValidators.displayName.msg }
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={ { mt: 2 } }>
                            <TextField
                                label={ 'Email' }
                                type={ 'email' }
                                placeholder={ 'Email' }
                                fullWidth
                                name="email"
                                value={ email }
                                onChange={ onInputChange }
                                error={ formStateValidators.email.error && formSubmitted }
                                helperText={ formStateValidators.email.msg }
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={ { mt: 2 } }>
                            <TextField
                                label={ 'Password' }
                                type={ 'password' }
                                placeholder={ 'Entry password' }
                                fullWidth
                                name="password"
                                value={ password }
                                onChange={ onInputChange }
                                error={ formStateValidators.password.error && formSubmitted }
                                helperText={ formStateValidators.password.msg }
                            />
                        </Grid>

                        <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } }>
                            <Grid item
                                  xs={ 12 }
                                  display={ !!errorMessage ? '' : 'none' }
                            >
                                <Alert severity="error">{ errorMessage }</Alert>
                            </Grid>

                            <Grid item
                                  xs={ 12 }
                            >
                                <Button variant={ 'contained' }
                                        fullWidth
                                        type="submit"
                                        disabled={ isCheckingAuthentication }
                                >
                                    Create account
                                </Button>
                            </Grid>

                            <Grid container direction="row" justifyContent={ 'end' }>
                                <Typography sx={ { mr: 1 } }>Do you already have an account?</Typography>
                                <Link component={ RouterLink } color="inherit" to="/auth/login">
                                    Login
                                </Link>

                            </Grid>


                        </Grid>

                    </Grid>
                </form>
            </AuthLayout>

        </>
    )
}
