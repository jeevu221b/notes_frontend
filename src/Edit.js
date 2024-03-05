import { useParams } from 'react-router-dom';
import { apiRequest, backendRoutes } from './utill';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Edit() {

    const navigate = useNavigate()
    const [note, setNote] = useState("")
    const { id } = useParams();

    async function getNote() {
        try {
            const url = backendRoutes.GET_NOTES.url(id)
            const res = await apiRequest(url, backendRoutes.GET_NOTES.method)
            console.log(res.message)
            setNote(res.message)
        }
        catch (error) {

            alert(error)
            console.error(error, "Error")
        }
    }

    function handleUpdate() {
        console.log("INSIDE THE UPDATE")
        const body = { "note": note, "note_id": id }
        editNote(body)
    }

    function handleChange(e) {
        setNote(e.target.value)


    }
    async function editNote(payload) {
        try {
            const url = backendRoutes.EDIT_NOTES.url
            const res = await apiRequest(url, backendRoutes.EDIT_NOTES.method, payload)
            console.log(res.message)
            navigate('/view')
        }
        catch (error) {
            console.error(error, "Error")
        }
    }





    useEffect(() => {
        getNote()

    }, [])

    return (
        <div>
            <textarea
                placeholder='Enter your Notes here!'
                value={note.note}
                onChange={(e) => handleChange(e)}

            >
            </textarea>
            <button onClick={() => handleUpdate()}>Update</button>
        </div>
    )
}

export { Edit }