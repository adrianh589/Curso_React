import { useUiStore } from '../../hooks/index.js';
import { useCalendarStore } from '../../hooks/useCalendarStore.js';
import { addHours } from 'date-fns';

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();
    const handleClickNew = () => {
        setActiveEvent({
            _id: null,
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Adrian'
            }
        });
        openDateModal();
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
