import { Schema, model } from "mongoose";

const notesSchema = new Schema({
    name: {type: String},
    // noteId: {type: String},
    noteType: {type: String, enum: ['private', 'personal', 'public']},
    message: {type: String},
    noteStatus: {type: String, enum: ['complete', 'incomplete']},
    createdAt: { type: Date, default: Date.now()},
    updatedAt: { type: Date, default: Date.now()}
});

export const NotesModel = model('Note', notesSchema);