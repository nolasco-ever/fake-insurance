import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

//initialize app
const app = express();
app.use(express.json());
app.use(cors());

//Middleware
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

//Set up connection to database
const CONNECTION_URL = 'mongodb+srv://nolascoever19:TOyRGzxVOwaBw0Xi@cluster0.rmy5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//Connect to MongoDB database
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log("Listening on port: ", PORT))
}).catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

//nolascoever19
//TOyRGzxVOwaBw0Xi