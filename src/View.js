
import { useEffect, useState } from 'react';
import { apiRequest, backendRoutes, deleteNote } from './utill';
import { Notes } from './Notes';
import { useNavigate } from 'react-router-dom';

const View = () => {
    const navigate = useNavigate()
    const [notes, setNotes] = useState([]);

    async function _getNotes() {
        const response = await apiRequest(backendRoutes.GET_NOTES.url(), backendRoutes.GET_NOTES.method);
        console.log(response, 'RESPONSE');
        if (!response.message) {
            alert('No notes');
            return;
        }
        setNotes(response.message);
    }
    useEffect(() => {
        _getNotes();
    }, []);


    function handleEdit(id) {
        navigate('/edit/' + id)

    }

    async function handleDelete(id) {
        await deleteNote({ "note_id": id })
        _getNotes()

    }

    return (
        <div>
            <Notes notes={notes} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    );
};


export default View;
