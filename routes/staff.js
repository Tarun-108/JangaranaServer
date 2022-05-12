const express = require("express")
const {signin,signout} = require("../controllers/user");
const userAuth = require("../middlewares/userAuth")
const router = express.Router()

router.post('/signin', signin)

router.get("/signout", userAuth ,signout)


module.exports = router
