import Api from "../Api/Api";
import { INote } from "../../models/INote";
import { Dispatch, SetStateAction, useRef } from "react";
import './AddNote.css'

interface IFormProps {
  setNotes: Dispatch<SetStateAction<INote[]>>;
}

export const AddNote = ({ setNotes }: IFormProps) => {
  const formRef = useRef<HTMLTextAreaElement>(null);
  const handleButtonClick = () => {
    if (formRef.current) {
      console.log(formRef.current);
      const inputValue = formRef.current.value;
      Api.post(inputValue).then((res) => setNotes(res));
    }
  };

  return (
    <div className="form">
    <div className="form-name">New Note</div>
    <textarea
      name="new"
      id="new"
      cols={30}
      rows={10}
      ref={formRef}
    ></textarea>
    <button className="send" onClick={handleButtonClick}>
    </button>
    </div>
);
}
