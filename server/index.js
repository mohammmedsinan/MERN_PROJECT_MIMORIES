import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
//Middle Wear
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

//Data base setup MONGODB database
const MONGO_DB_UR = process.env.MONGO_DB_DATABASE;
const PORT = process.env.PORT;
mongoose
  .connect(MONGO_DB_UR, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`The server running on port: ${PORT}`)))
  .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);
