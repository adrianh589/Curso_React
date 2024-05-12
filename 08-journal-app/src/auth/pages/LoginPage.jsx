// El nombre de Page en LoginPage (en este caso) es para indicar
// que el componente hace referencia a toda la página como tal
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout.jsx';
import { useForm } from '../../hooks/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks.js';
import { useMemo } from 'react';


const formData = {
    email: '',
    password: ''
};

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const {
        email,
        password,
        onInputChange
    } = useForm( formData );

    const isAuthenticating = useMemo( () => status === 'checking', [status] );

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log( { email, password } );
        dispatch( startLoginWithEmailPassword( { email, password } ) );
    }

    const onGoogleSignIn = () => {
        console.log( 'onGoogleSignIn' );
        dispatch( startGoogleSignIn() );
    }

    return (
        <AuthLayout title={ 'Login' }>
            <form aria-label='submit-form'
                onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label={ 'Email' }
                            type={ 'email' }
                            placeholder={ 'email@email.com' }
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label={ 'Password' }
                            type={ 'password' }
                            placeholder={ 'Entry password' }
                            fullWidth
                            name="password"
                            inputProps={{
                                'data-testid': 'password'
                            }}
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid container
                          display={ !!errorMessage ? '' : 'none' }
                          sx={{mt: 2}}
                    >
                        <Grid item
                              xs={ 12 }

                        >
                            <Alert severity="error">{ errorMessage }</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } }>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAuthenticating }
                                type="submit"
                                variant={ 'contained' }
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button disabled={ isAuthenticating }
                                    variant={ 'contained' }
                                    fullWidth
                                    onClick={ onGoogleSignIn }
                                    aria-label="google-btn"
                            >
                                <Google/>
                                <Typography sx={ { ml: 1 } }>Google</Typography>
                            </Button>
                        </Grid>


                        <Grid container direction="row" justifyContent={ 'end' }>

                            <Link component={ RouterLink } color="inherit" to="/auth/register">
                                Create account
                            </Link>

                        </Grid>


                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
