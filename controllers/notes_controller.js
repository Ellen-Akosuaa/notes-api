import { NotesModel } from "../models/notes_model.js";


// add a note
export const addNote = async (req, res) => {
    try {
        console.log("request", req.body)
        const addData = await NotesModel.create(req.body);
        res.status(200).send(addData);
    
    } catch (error) {
        console.log(error)
    }
    };

    // get all notes
    export const allNotes = async (req, res) => {
        try {
            console.log('request', req.body)
            const getNotes = await NotesModel.find();
            res.status(200).send(getNotes)
            
        } catch (error) {
            console.log(error)
            
        }
    };

    // get one note 
    export const getNoteById = async (req, res) => {
        try {
            const noteId = req.params.id;
            const note = await NotesModel.findById(noteId);
            res.status(200).send(note);
        } catch (error) {
            console.log(error)
        }
    };
    
    // update status of a note
    export const updateNote = async (req, res) => {
        try {
            const status = req.body.noteStatus
            console.log("request", status)
            const updateData = await NotesModel.findByIdAndUpdate(req.params.id, {noteStatus: status},
            {new: true}
            );
            res.status(200).send(updateData);
        
        } catch (error) {
            console.log(error)
        }
        };

// delete a note
export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await NotesModel.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedNote)
    } catch (error) {
        console.log(error)
        
    }
}