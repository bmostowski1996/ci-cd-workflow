import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
// import models from '../models/index.js';
import pythonQuestions from './pythonQuestions.json' assert { type: "json" };
db.once('open', async () => {
    await cleanDB('questions');
    await Question.insertMany(pythonQuestions);
    console.log('Questions seeded!');
    process.exit(0);
});
