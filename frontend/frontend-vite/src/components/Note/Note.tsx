import { INote } from "../../models/INote";
import { Dispatch, SetStateAction } from 'react';
import Api from "../Api/Api";
import './Note.css';

interface INoteProps {
    note: INote,
    setNotes: Dispatch<SetStateAction<INote[]>>
}

export default function Note({ note, setNotes }: INoteProps) {
    return (
        <div className="note-container">
            <div className="note">
                <div className="content">{note.content}</div>
                <button className="delete-note" onClick = {() => {
                Api.delete(note.id)
                .then((res) => setNotes(res))
                .catch((error) => {
                  console.error('Произошла ошибка:', error);
                });
            }}>X
            </button>
            </div>
        </div>
    )
}