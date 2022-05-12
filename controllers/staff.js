const Staff = require("../models/staff")
const {validationResult} = require("express-validator")
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('express-jwt');

exports.signup = (req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }

    const {staffname,email,password} = req.body

    Staff.findOne({email}, (err, staff) => {
        if(staff){
            res.status(400).json({
                message: "staff Already Exists"
            })
        }

        if(err || !staff){
            const otp = Math.floor(((Math.random() * 1000000) + 100000) % 1000000);

            const token = jwt.sign({staffname: staffname, email: email, password: password, otpCoded: otp}, process.env.SECRET)

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    staff: 'a.antsapps@gmail.com',
                    pass: 'qybdrvmddxnivpqu'
                }
            });
            const mailOptions = {
                from: 'a.antsapps@gmail.com',
                to: email,
                subject: 'Census 2022: Verification OTP',
                text: `You have registered as a Family-Head in Jangarana App. Please verify your email ${email}.The OTP to verify you registered email id in BankPro is ${otp}.\n\nNote:Add your details carefully in the application as it is very important that every staff provides authentic data for Census\n\nRegards,\nJangarana Team`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.json({
                        error: error
                    })
                }
                if (info) {
                    res.json({
                        message: "Email Sent Successfully please verify to proceed",
                        token: token
                    })
                }
            })
        }
    })

}


exports.verify_email = (req,res) => {
    const {token,otp} = req.body

    if(token){
        jwt.verify(token, process.env.SECRET, function (error, decodedToken) {
            if (error) {
                return res.status(400).json({
                    message: "Invalid Token"
                })
            }

            const {staffname, email, password, otpCoded} = decodedToken;

            if (otp.toString() === otpCoded.toString()) {
                const staff = new Staff({staffname, email, password})

                staff.save((e, staff) => {
                    if (e) {
                        return res.status(400).json({
                            error: "staff Already Exists Please Login to Continue",
                        })
                    }

                    return res.status(200).json({
                        message: "staff Registered Signin to Continue",
                        staff
                    })
                })
            }
        })
    }

}



exports.signin = (req, res) => {
    const {email, password} = req.body

    Staff.findOne({email}, (err, staff) => {
        if(err || !staff) {
            return res.status(400).json({
                error: "Email was not found"
            })
        }

        // Authenticate staff
        if(!staff.authenticate(password)) {
            return res.status(400).json({
                error: "Email and password do not match"
            })
        }

        // Create token
        const token = jwt.sign({_id: staff._id}, process.env.SECRET)

        // Put token in cookie
        res.cookie('token', token, {expire: new Date() + 1})

        // Send response
        const {_id, staffname, email} = staff

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                staff: 'a.antsapps@gmail.com',
                pass: 'qybdrvmddxnivpqu'
            }
        });
        const mailOptions = {
            from: 'a.antsapps@gmail.com',
            to: email,
            subject: 'Census 2022: Login Notification',
            text: `You have logged in as a Staff Member in Jangarana App.Check your profile section and area allotted to you from the app.\n\nNote:Add the details carefully in the application as it is very important to have authentic data for Census\n\nRegards,\nJangarana Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.json({
                    error: error
                })
            }
            if (info) {
                res.json({
                    token,
                    staff: {
                        _id,
                        staffname,
                        email
                    }
                })
            }
        })
        

    })
}

exports.signout = (req, res) => {
    res.clearCookie("token")
    return res.json({
        message: "staff sign out successful"
    })
}
