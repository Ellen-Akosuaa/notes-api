import { Router } from "express";
import { addNote, allNotes, updateNote, deleteNote, getNoteById } from "../controllers/notes_controller.js";

const notesRouter = Router()

notesRouter.post('/notes', addNote);

notesRouter.get('/notes', allNotes);

notesRouter.patch('/notes/:id', updateNote);

notesRouter.delete('/notes/:id', deleteNote);

notesRouter.get('/notes/:id', getNoteById);




export default notesRouter; 