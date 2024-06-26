import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/index.js';

export const SideBarItem = ( { id, title = '', body, date, imageUrls = [] } ) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return (title.length > 17)
            ? title.substring(0, 17) + '...'
            : title;
    }, [title] );

    const onClickNote = (note) => {
        dispatch(setActiveNote(note));
    }

    return (
            <ListItem disablePadding onClick={() => onClickNote({ id, title, body, date, imageUrls })}>
                <ListItemButton>
                    <ListItemIcon>
                        <TurnedInNot />
                    </ListItemIcon>
                    <Grid container>
                        <ListItemText primary={newTitle}/>
                        <ListItemText secondary={body}/>
                    </Grid>
                </ListItemButton>
            </ListItem>
    )
}
