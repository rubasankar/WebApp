import { useContext } from "react";
import { NoteContextType, Tcolor } from "../types/@types.note";
import { NoteContext } from "../context/NotesProvider";

interface props {
    color: Tcolor,
}


const Color = ({color}:props) => {
    const {notes,setNotes, selectedNote } = useContext(NoteContext) as NoteContextType;

    const changeColor = () => {

        try {
            const currentNoteIndex = notes.findIndex(
                (note) => note.unid === selectedNote.unid
            );
     
            const updatedNote = {
                ...notes[currentNoteIndex],
                colors: color,
            };
     
            const newNotes = [...notes];
            newNotes[currentNoteIndex] = updatedNote;
            setNotes(newNotes);

        } catch (error) {
            alert("You must select a note before changing colors");
        }
    };

    return (
        <div
            onClick={changeColor}
            className="color"
            style={{ backgroundColor: color.colorHeader}}
        ></div>
    );
};

export default Color;