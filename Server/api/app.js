import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes importing
import { authRouter } from '../routes/auth.routes.js';
import { profileRouter } from '../routes/profile.routes.js';
import { subRouter } from '../routes/sub.routes.js';

// Routes
app.use("/api/auth", authRouter)
app.use("/api/profile", profileRouter)
app.use("/api/newsletter", subRouter);

export { app };
