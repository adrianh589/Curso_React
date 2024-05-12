import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {



    const setInitialValues = () => {
        const keys = Object.keys( initialForm );
        let object = {};
        for ( const key of keys ) {
            Object.assign( object, { [key]: { error: false, msg: '' } } )
        }
        return object;
    }

    const [formStateValidators, setFormStateValidators] = useState( setInitialValues() );
    const [formState, setFormState] = useState( initialForm );
    const [isFormValid, setIsFormValid] = useState( false );

    // Si el formulario inicial cambia, entonces
    // se vuelve a llamar el initial form
    useEffect( () => {
        setFormState(initialForm);
    }, [initialForm] );
    
    
    useEffect( () => {
        // Verify formValid
        isFormValidFn();
    }, [formStateValidators] );

    useEffect( () => {

        // For all of inputs of the form, we verify
        // what inputs have errors
        const keys = Object.keys( formValidations );
        let tmpForm = {};
        for ( const key of keys ) {
            const { name, value } = document.getElementsByName( key ).item( 0 );
            tmpForm[name] = formValidation( name, value );
        }
        setFormStateValidators( tmpForm );
    }, [] );

    const isFormValidFn = () => {
        let validErrors = [];
        Object.entries(formStateValidators).map( ([key, value]) => {
            if (value?.error) {
                validErrors.push({key, value});
            }
        });

        setIsFormValid(!validErrors.length > 0);
    }


    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState( {
            ...formState,
            [name]: value,
        } );

        setFormStateValidators( {
            ...formStateValidators,
            [name]: formValidation( name, value )
        } );

        // Verify the validity of the form
        isFormValidFn();
    }

    const formValidation = ( name, value ) => {
        const validator = formValidations[name];
        if ( validator ) {
            const [fn, errorMessage] = validator;
            return !fn( value ) ? { error: true, msg: errorMessage } : { error: false, msg: '' };
        }
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        formStateValidators,
        onInputChange,
        onResetForm,
        isFormValid
    }
}
