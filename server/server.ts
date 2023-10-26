import express, { Express, Request, Response } from 'express';

// const app = express(); zamiast tego
export const app: Express = express();
app.use(express.urlencoded({ extended: true }));


require('../database/db.ts')
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes')
const taskRouter = require('./routes/taskRoutes');



const cors = require('cors')
app.use(cors());


// parsing body.data

export const jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes localhost:4000

app.use('/auth', authRoutes)
app.use('/task', taskRouter);






app.listen(4000, () => {
    console.log('Server is up');

}); // or server.listen(3001, '0.0.0.0'); for all interfaces
