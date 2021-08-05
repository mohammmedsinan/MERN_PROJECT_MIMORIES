import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import cors from 'cors';

const app = express();

//Middle Wear
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

//Data base setup MONGODB database
const MONGO_DB_UR =
  'mongodb+srv://train:super99m@memories.ura4l.mongodb.net/Memories?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose
  .connect(MONGO_DB_UR, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`The server running on port: ${PORT}`)))
  .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);
