const express = require("express")
const {create} = require("../controllers/household");
const {check} = require("express-validator")
const staffUserAuth = require("../middlewares/staffUserAuth")
const router = express.Router()


router.post("/create", staffUserAuth , create)


module.exports = router