const express = require("express")
const {create} = require("../controllers/household");
const {check} = require("express-validator")
const staffAuth = require("../middlewares/staffAuth")
const createStaffAuth = require("../middlewares/createStaffAuth")
const router = express.Router()


router.post("/create", staffAuth , create)


module.exports = router