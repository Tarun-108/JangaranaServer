const express = require("express")
const {signin,signout, signup, verify_email} = require("../controllers/user");
const {check} = require("express-validator")
const staffAuth = require("../middlewares/staffAuth")
const createStaffAuth = require("../middlewares/createStaffAuth")
const router = express.Router()

router.post('/signup',createStaffAuth ,[
    check("staffname","Name length must be greater than 3 characters").isLength({min: 3}),
    check("email","Email should be valid").isEmail(),
    check("password","Password must be greater that 6 characters").isLength({min: 6})
], signup)


router.post("/verify_email", createStaffAuth, verify_email)

router.post('/signin', signin)

router.get("/signout", staffAuth ,signout)


module.exports = router
