import { useState, useEffect } from 'react'
import { INote } from '../../models/INote';
import Api from '../Api/Api';
import { AddNote } from '../AddNote/AddNote';
import Note from '../Note/Note';
import './NotesWidget.css'


export default function NotesWidget() {
    const [notes, setNotes] = useState<INote[]>([]);

  const handleUpdate = async () => {
    const res = await Api.update();
    setNotes(res);
  };

  useEffect(() => {
    handleUpdate()
  }, []);

  return (
      <>
      <div className="header">
          <div className="header-name">Notes</div>
          <button className="update" onClick={handleUpdate}></button>
      </div>
      <div className="notes">
              {notes.map((note) => {
                  return <Note key={note.id} note={note} setNotes={setNotes} />;
              })}
          </div>
              <AddNote setNotes={setNotes} />
 
      </>
  );
}
