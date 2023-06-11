import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// const uri = "mongodb+srv://vedovatto:mern@cluster0.k16vpjx.mongodb.net/?retryWrites=true&w=majority";

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3001, () => {
    console.log('SERVER STARTED')
})