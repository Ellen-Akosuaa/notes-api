import express from "express";
import notesRouter from "./routes/notes.js";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";
import mongoose from "mongoose";

const app = express();


app.use(express.json());



dbConnection();

app.use(notesRouter);


app.listen(7060, () => {
    console.log('App listening on port 7060');
});

