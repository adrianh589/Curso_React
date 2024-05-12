import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { DeleteOutline, SaveOutlined, Upload, UploadOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components/index.js';
import { useForm } from '../../hooks/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal/index.js';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector( state => state.journal );
    const { body, title, date, onInputChange, formState } = useForm( note );

    const fileInputRef = useRef();

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date] );

    useEffect( () => {
        if ( messageSaved.length > 0 ) {
            Swal.fire( {
                title: 'Nota actualizada',
                text: messageSaved,
                icon: 'success'
            } );
        }
    }, [messageSaved] );


    useEffect( () => {
        dispatch( setActiveNote( formState ) );
    }, [formState] );

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    const onFileInputChange = ( { target } ) => {
        if ( target.files === 0 ) return;
        dispatch( startUploadingFiles( target.files ) );
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    return (
        // el grid permite definir elementos internamente
        // Como jugar con el orden y demas en vez del Box
        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={ { mb: 1 } }>
            <Grid>
                <Typography fontSize={ 39 } fontWeight="light">{ dateString }</Typography>
            </Grid>

            <Grid item>

                <input type="file"
                       multiple
                       onChange={ onFileInputChange }
                       style={ { display: 'none' } }
                       ref={ fileInputRef }
                />

                <IconButton color="primary"
                            disabled={ isSaving }
                            onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined/>
                </IconButton>

                <Button color="primary"
                        sx={ { padding: 2 } }
                        onClick={ onSaveNote }
                        disabled={ isSaving }
                >
                    <SaveOutlined sx={ { fontSize: 30, mr: 1 } }/>
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Enter a title"
                    label="Title"
                    sx={ { border: 'none', mb: 1 } }
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    minRows={ 5 }
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            <Grid container justifyContent="end">
                <Button
                    onClick={ onDelete }
                    sx={ { mt: 2 } }
                    color="error"
                >

                    <DeleteOutline/>
                    Delete
                </Button>
            </Grid>


            {/* Image gallery */ }
            <ImageGallery images={ note.imageUrls }/>
        </Grid>
    )
}
