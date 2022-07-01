import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Bins from './routes/BinsRoutes.js';
import Item from './routes/ItemRoutes.js';
import Data from './routes/DataRoutes.js';

const app = express();
app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/bins', Bins);
app.use('/item', Item);
app.use('/data', Data);

dotenv.config();

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(process.env.PORT, ()=>console.log(`Listening on port: ${process.env.PORT}`));
})
.catch((error)=>console.log(error));