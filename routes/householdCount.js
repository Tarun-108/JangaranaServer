const express = require("express")
const {get} = require("../controllers/householdcount");
const {check} = require("express-validator")
const staffUserAuth = require("../middlewares/staffUserAuth")
const router = express.Router()


router.post("/get", staffUserAuth , get)


module.exports = router