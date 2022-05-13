const mongoose = require("mongoose")

const fertilitySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    noLivingSon: {
        type: Number,
        required: true,
    },
    noLivingDaughter: {
        type: Number,
        required: true,
    },
    noBornSon: {
        type: Number,
        required: true,
    },
    noBornDaughter: {
        type: Number,
        required: true,
    },
    noBornAliveSonLastYear: {
        type: Number,
        required: true,
    },
    noBornAliveDaughterLastYear: {
        type: Number,
        required: true,
    }
}, { timeStamps: true })

fertilitySchema.methods = {

}

module.exports = mongoose.model("Fertility", fertilitySchema)