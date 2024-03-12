import express from "express"
import cors from 'cors';

const app = express()
const port = 7001

import db from './data.js';

app.use(cors());
app.get('/weather/:value', (req, res) => {
    const place = req.params.value;
    const obj = db.find(ele => ele['name'].toLowerCase() === place.toLowerCase());
    !obj ? res.send({}) : res.send(obj);
})

app.listen(port, () => console.log(`server is running ${port}`));