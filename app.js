const mongoose = require("mongoose")
const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();


//DB
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB Connected")
}).catch(() => {
    console.log("Unable to connect to DB")
})

//Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Importing routes
const userRoutes = require("./routes/user")
const staffRoutes = require("./routes/staff")
const formRoutes = require("./routes/form")
const householdRoutes = require("./routes/household")
const migrationRoutes = require("./routes/migration")
const fertilityRoutes = require("./routes/fertility")
const householdCountRoutes = require("./routes/householdCount")
const censusRoutes = require("./routes/census")

//Using routes
app.use('/api/auth', userRoutes)
app.use('/api/staff-auth', staffRoutes)
app.use('/api/form', formRoutes)
app.use('/api/household', householdRoutes)
app.use('/api/migration', migrationRoutes)
app.use('/api/fertility', fertilityRoutes)
app.use('/api/householdcount', householdCountRoutes)
app.use('/api/census', censusRoutes)

const port = process.env.PORT || 8000

//Starting a server
app.listen(port, () => {
    console.log(`App is running at ${port}`)
})
