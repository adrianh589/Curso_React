import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout.jsx';
import { NoteView, NothingSelectedView } from '../view/index.js';

import { startNewNote } from '../../store/journal/index.js';

export const JournalPage = () => {

    const dispatch = useDispatch();
    const { isSaving, active } = useSelector(state => state.journal);

    const onClickNewNote = () => {
        dispatch( startNewNote() );
    }

    return (
        <>
            <JournalLayout>
                {/*<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus deserunt distinctio dolore eos et illo incidunt neque omnis, saepe sapiente tenetur! Aut beatae, dicta distinctio harum iste quas! Perferendis?</Typography>*/ }

                {
                    (!!active) ? <NoteView /> : <NothingSelectedView/>
                }

                {/*<NothingSelectedView/>*/}

                {/*<NoteView />*/ }

                <IconButton
                    onClick={onClickNewNote}
                    disabled={ !isSaving }
                    size="large"
                    sx={ {
                        color: 'white',
                        backgroundColor: 'error.main',
                        ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                        position: 'fixed',
                        right: 50,
                        bottom: 50
                    } }
                >
                    <AddOutlined sx={ { fontSize: 30 } }/>
                </IconButton>

            </JournalLayout>
        </>
    )
}
