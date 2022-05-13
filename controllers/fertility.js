const Fertility = require("../models/fertility")
require('express-jwt');

const create = (req, res) => {
    const { id } = req.body

    Fertility.findOne({ id }, (err, form) => {
        if (form) {
            res.status(400).json({
                message: "Id Already Exists ."
            })
        }

        if (err || !form) {

            const fertility = new Fertility(req.body)

            fertility.save((e, form) => {
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