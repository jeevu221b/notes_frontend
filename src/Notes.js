

const Notes = (props) => {
    const { notes, handleEdit, handleDelete } = props
    return (
        notes.map((note, index) => (
            <div key={index}>
                {note.note}{' '}
                <button onClick={() => handleEdit(note.note_id)}>Edit</button>{' '}
                <button onClick={() => handleDelete(note.note_id)}>Delete</button>
            </div>
        ))
    )
}
export { Notes }