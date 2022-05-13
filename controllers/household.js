const Household = require("../models/household")
require('express-jwt');

const create = (req, res) => {
    const { id } = req.body

    Household.findOne({ id }, (err, form) => {
        if (form) {
            res.status(400).json({
                message: "Id Already Exists ."
            })
        }

        if (err || !form) {

            const household = new Household(req.body)

            household.save((e, form) => {
                if (e) {
                    return res.status(400).json({
                        error: "Id Already exits ." + e,
                    })
                }

                return res.status(200).json({
                    message: "Successfully Saved the details",
                    form
                })
            })
        }
    })

}




module.exports = {
    "create": create
}