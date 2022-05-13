const mongoose = require("mongoose")

const householdSchema = new mongoose.Schema({
    id:{
        type: String,
        required:true,
    },
    buildingNoMunicipal:{
        type: String,
        required:true,
    },
    censusHouseNo:{
        type: String,
        required:true,
    },
    floorMaterial:{
        type: String,
        required:true,
    },
    roofMaterial:{
        type: String,
        required:true,
    },
    wallMaterial:{
        type: String,
        required:true,
    },
    useCensusHousehold:{
        type: String,
        required:true,
    },
    conditionCensusHousehold:{
        type: String,
        required:true,
    },
    noRooms:{
        type: Number,
        required:true,
    },
    noPersons:{
        type: Number,
        required:true,
    },
    noMarriedCouples:{
        type: Number,
        required:true,
    },
    drinkingSource:{
        type: String,
        required:true,
    },
    drinkingSourceAvailability:{
        type: String,
        required:true,
    },
    lightingSource:{
        type: String,
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