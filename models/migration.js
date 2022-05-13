const mongoose = require("mongoose")

const migrationSchema = new mongoose.Schema({
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
        type: Number,
        required:true,
    },
    reasonMigration:{
        type: String,
        required:true,
    }
} , { timeStamps : true })

migrationSchema.methods = {

}

module.exports = mongoose.model("Migration" , migrationSchema )