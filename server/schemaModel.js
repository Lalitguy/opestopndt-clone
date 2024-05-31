const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        trim : false
    },
    message: String,
    organizationName: String,
    contact: Number,
    date: Date
})

const recordEntryModel = mongoose.model(
    'entries', entrySchema
);

module.exports ={ recordEntryModel };