const mongoose = require("mongoose")

const censusSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    maleCount: {
        type: Number,
        required: true,
    },
    femaleCount: {
        type: Number,
        required: true,
    },
    marriedCount: {
        type: Number,
        required: true,
    },
    marriedBefore18: {
        type: Number,
        required: true,
    },
    marriedAfter18: {
        type: Number,
        required: true,
    },
    hinduCount: {
        type: Number,
        required: true,
    },
    muslimCount: {
        type: Number,
        required: true,
    },
    sikhCount: {
        type: Number,
        required: true,
    },
    christianCount: {
        type: Number,
        required: true,
    },
    hindiCount: {
        type: Number,
        required: true,
    },
    englishCount: {
        type: Number,
        required: true,
    },
    marathiCount: {
        type: Number,
        required: true,
    },
    punjabiCount: {
        type: Number,
        required: true,
    },
    hearingLossCount: {
        type: Number,
        required: true,
    },
    visionLossCount: {
        type: Number,
        required: true,
    },
    literateCount: {
        type: Number,
        required: true,
    },
    illiterateCount: {
        type: Number,
        required: true,
    },
    panditCount: {
        type: Number,
        required: true,
    },
    baniyaCount: {
        type: Number,
        required: true,
    },
    pass10Count: {
        type: Number,
        required: true,
    },
    pass12Count: {
        type: Number,
        required: true,
    },
    underGraduateCount: {
        type: Number,
        required: true,
    },
    postGraduateCount: {
        type: Number,
        required: true,
    },
    doctorateCount: {
        type: Number,
        required: true,
    },
    farmerCount: {
        type: Number,
        required: true,
    },
    dailyWageWorkerCount: {
        type: Number,
        required: true,
    },
    sportspersonCount: {
        type: Number,
        required: true,
    },
    engineerCount: {
        type: Number,
        required: true,
    },
    docterCount: {
        type: Number,
        required: true,
    },
    primaryServiceCount: {
        type: Number,
        required: true,
    },
    secondaryServiceCount: {
        type: Number,
        required: true,
    },
    workedLastYearCount: {
        type: Number,
        required: true,
    },
    notWorkedLastYearCount: {
        type: Number,
        required: true,
    },
    lookingJobCount: {
        type: Number,
        required: true,
    },
    notLookingJobCount: {
        type: Number,
        required: true,
    },
    distance10kmLessCount: {
        type: Number,
        required: true,
    },
    distance10kmMoreCount: {
        type: Number,
        required: true,
    },
    carTravelCount: {
        type: Number,
        required: true,
    },
    bikeTravelCount: {
        type: Number,
        required: true,
    },
    footTravelCount: {
        type: Number,
        required: true,
    },
    cycleTravelCount: {
        type: Number,
        required: true,
    },
}, { timeStamps: true })

censusSchema.methods = {

}

module.exports = mongoose.model("Census", censusSchema)