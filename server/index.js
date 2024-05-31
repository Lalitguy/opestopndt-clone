const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { recordEntryModel } = require('./schemaModel');

const app = express();
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3001
const mongoURI = process.env.DATABASE_KEY;

mongoose.connect(mongoURI).then(() => {
    console.log("MongoDB Connected")
}).catch((err) => {
    console.log("Unable to Connect to Database", err)
})


app.post('/', async (req, res) => {
    try {
        recordEntryModel.create(req.body);
        // const newRecord = new recordEntryModel(req.body);
        // await newRecord.save();
        res.status(200).send("Sucess");
        console.log("A new Entry was added")
    }
    catch (err) {
        console.log("Something went wrong", err);
        res.status(500).send(err)
    }
})


app.listen(port)
