import {act, render, renderHook} from "@testing-library/react";
import {useForm} from "../../src/hooks/index.js";

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Adrian',
        email: 'adrian@adrian.com'
    }
    
    test('Debe de regresar los valores por defecto', () => {
       const { result } = renderHook( () => useForm(initialForm) );

       expect(result.current).toEqual({
           name: initialForm.name,
           email: initialForm.email,
           formState: initialForm,
           onInputChange:  expect.any(Function),
           onResetForm: expect.any(Function),
       })
    });

    test('Debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';

        // Montar el hook
        const { result } = renderHook(() => useForm(initialForm));

        const { onInputChange, formState, onResetForm } = result.current;

        // onInputchange // act, event...
        act( () => {
            onInputChange({target: {name: 'name', value: newValue}});
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

        // expect, result.current.name === Juan
        // expect, result.current.formState.name === Juan
    })
})
