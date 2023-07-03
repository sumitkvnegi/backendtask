import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// import socket from 'socket.io';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

// ! MIDDLEWARE USED BY EXPRESS 
app.use(cors());
app.use(express.json());

/* ------------ */
// ! DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log('Connected to database'));

/* ------------ */
// ! USE ROUTERS 
import taskRouter from './routes/tasksRoutes.js';
import userRouter from './routes/usersRoutes.js';

app.use('/api/tasks',taskRouter);
app.use('/api/auth',userRouter);

/* ------------ */
app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));
