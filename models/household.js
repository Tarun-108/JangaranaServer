const mongoose = require("mongoose")

const householdSchema = new mongoose.Schema({
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
    latrine:{
        type: Boolean,
        required:true,
    },
    latrineType:{
        type: String,
        required:true,
    },
    bathingFacility:{
        type: Boolean,
        required:true,
    },
    wasteWaterOutletType:{
        type: String,
        required:true,
    },
    kitchen:{
        type: Boolean,
        required:true,
    },
    lpgPngConnection:{
        type: Boolean,
        required:true,
    },
    mainFuelCooking:{
        type: String,
        required:true,
    },
    mainCereal:{
        type: String,
        required:true,
    },
    radio:{
        type: Boolean,
        required:true,
    },
    television:{
        type: Boolean,
        required:true,
    },
    internet:{
        type: Boolean,
        required:true,
    },
    laptop:{
        type: Boolean,
        required:true,
    },
    mobilePhone:{
        type: Boolean,
        required:true,
    },
    bike:{
        type: Boolean,
        required:true,
    },
    car:{
        type: Boolean,
        required:true,
    },
    mobileNo:{
        type: Number,
        required:true,
    }
} , { timeStamps : true })

householdSchema.methods = {

}

module.exports = mongoose.model("Household" , householdSchema )