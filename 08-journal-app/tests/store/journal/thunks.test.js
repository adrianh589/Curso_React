import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from '../../../src/store/journal/index.js';
import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../../src/firebase/config.js';

describe( 'Pruebas en Journal Thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('startNewNote Debe de crear una nueva nota en blanco', async () => {
        const uid = 'Test-Uid';
        getState.mockReturnValue({auth: {uid: uid}});
        await startNewNote()( dispatch, getState );

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number)
        }));

        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number)
        }));

        //Borrar de firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePromises = [];
        docs.forEach( doc => deletePromises.push( deleteDoc(doc.ref) ) );

        await Promise.all(deletePromises);
    });

} );
