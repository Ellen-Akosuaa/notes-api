import express from "express";
import notesRouter from "./routes/notes.js";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";
import mongoose from "mongoose";

const app = express();
const port = 7060;


app.use(express.json());

await mongoose.connect(process.env.Mongo_Url)

dbConnection();

app.listen(7060, () => {
    console.log('App listening on port 7060');
});

app.use(notesRouter);