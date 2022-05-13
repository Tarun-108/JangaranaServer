const mongoose = require("mongoose")

const fertilitySchema = new mongoose.Schema({
    id:{
        type: String,
        required:true,
    },
    migrated:{
        type: Boolean,
        required:true,
    },
    country:{
        type: String,
        required:true,
    },
    city:{
        type: String,
        required:true,
    },
    district:{
        type: String,
        required:true,
    },
    zipCode:{
        type: String,
        required:true,
    },
    state:{
        type: String,
        required:true,
    },
    duration:{
        type: String,
        required:true,
    },
    reasonMigration:{
        type: String,
        required:true,
    },
    maritalStatus:{
        type: Boolean,
        required:true,
    },
    ageMarried:{
        type: Number,
        required:true,
    },
    religion:{
        type: String,
        required:true,
    },
    motherTongue:{
        type: String,
        required:true,
    },
    otherLanguage:{
        type: String,
        required:true,
    },
    isDisabled:{
        type: Boolean,
        required:true,
    },
    disableDOcLink:{
        type: String,
        required:true,
    },
    isLiterate:{
        type: Boolean,
        required:true,
    },
    caste:{
        type: String,
        required:true,
    },
    casteDocLink:{
        type: String,
        required:true,
    },
    highestEduLevel:{
        type: String,
        required:true,
    },
    occupation:{
        type: String,
        required:true,
    },
    industry:{
        type: String,
        required:true,
    },
    class:{
        type: String,
        required:true,
    },
    workedLastYear:{
        type: Boolean,
        required:true,
    },
    LookingForWork:{
        type: Boolean,
        required:true,
    },
    oneWayDisToWork:{
        type: Number,
        required:true,
    },
    modeOfTravel:{
        type: String,
        required:true,
    }
} , { timeStamps : true })

fertilitySchema.methods = {

}

module.exports = mongoose.model("FamilyForm" , familyFormSchema )