const HouseholdCount = require("../models/householdount")
const { validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('express-jwt');

const get = (req, res) => {
    const { censusId } = req.body

    HouseholdCount.findOne({ censusId }, (err, count) => {
        if (count) {
            res.status(200).json({
                message: "Household Details",
                count
            })
        }
        else {
            res.status(400).json({
                message: "No Such Household Details Exists"
            })
        }
    })
}

module.exports = {
    "get": get
}