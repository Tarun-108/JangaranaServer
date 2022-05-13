const Form = require("../models/form")
require('express-jwt');

const create = (req, res) => {
    const { id } = req.body

    Form.findOne({ id }, (err, form) => {
        if (form) {
            res.status(400).json({
                message: "Id Already Exists ."
            })
        }

        if (err || !form) {

            const form = new Form(req.body)

            form.save((e, form) => {
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