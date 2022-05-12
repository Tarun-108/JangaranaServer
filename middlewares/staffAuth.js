const jwt = require("jsonwebtoken")
const Staff = require("../models/staff")

const auth = async ( req , res , next ) => {
    try {
        const token = req.header("Authorization").replace('Bearer ' , '')
        const decodedToken = jwt.verify( token , process.env.SECRET )
        Staff.findOne(  { '_id': decodedToken._id } , ( err , staff ) =>
        {
            if(err || !staff) {
                res.status(401).send({
                    error : "Please Authenticate "
                })
            }else {
                next()
            }
        })
    } catch( e ) {
        res.status(401).send({
            error : "Please Authenticate 22"
        })
    }
}

module.exports = auth