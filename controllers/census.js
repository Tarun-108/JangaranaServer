const Census = require("../models/census")
const { validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('express-jwt');

const get = (req, res) => {
    const { censusId } = req.body

    Census.findOne({ censusId }, (err, count) => {
        if (count) {
            res.status(200).json({
                message: "General Details",
                count
            })
        }
        else {
            res.status(400).json({
                message: "No Such general Details Exists"
            })
        }
    })
}

module.exports = {
    "get": get
}