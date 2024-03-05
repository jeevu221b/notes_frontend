import './Create.css';
import { useState } from "react"
import { apiRequest, backendRoutes } from './utill';
import { useNavigate } from 'react-router-dom';


function Create() {
    const navigate = useNavigate()
    const [note, setNote] = useState("")

    async function createNote(payload) {
        try {
            await apiRequest(backendRoutes.CREATE_NOTES.url, backendRoutes.CREATE_NOTES.method, payload)
            navigate('/view')
        }
        catch (error) {
            alert(error)
        }
    }


    function handleChange(e) {
        setNote({ note: e.target.value })
    }
    function handleClick() {
        createNote(note)

    }

    return (
        <div>
            <textarea
                placeholder="Enter your Notes here :) "
                value={note.note}
                onChange={handleChange}
            >
            </textarea>
            <button onClick={(e) => handleClick(e)}>Save</button>
        </div >

    )
}

export default Create