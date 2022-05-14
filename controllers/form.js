const Form = require("../models/form")
const Census = require("../models/census")
require('express-jwt');

const create = (req, res) => {
    const { id , mohalla , city , district , zipCode , state } = req.body

    const censusId = mohalla + city + district + zipCode + state
    var maleCount = 0
    var femaleCount = 0
    var marriedCount = 0
    var unmarriedCount = 0
    var marriedBefore18 = 0
    var marriedAfter18 = 0
    var hinduCount = 0
    var muslimCount = 0
    var sikhCount = 0
    var christianCount = 0
    var hindiCount = 0
    var englishCount = 0
    var marathiCount = 0
    var punjabiCount = 0
    var disabledCount = 0
    var notDisabledCount = 0
    var literateCount = 0
    var illiterateCount = 0
    var panditCount = 0
    var baniyaCount = 0
    var pass10Count = 0
    var pass12Count = 0
    var underGraduateCount = 0
    var postGraduateCount = 0
    var doctorateCount = 0
    var farmerCount = 0
    var dailyWageWorkerCount = 0
    var sportspersonCount = 0
    var engineerCount = 0
    var docterCount = 0
    var primaryServiceCount = 0
    var secondaryServiceCount = 0
    var workedLastYearCount = 0
    var notWorkedLastYearCount = 0
    var lookingJobCount = 0
    var notLookingJobCount = 0
    var distance10kmLessCount = 0
    var distance10kmMoreCount = 0
    var carTravelCount = 0
    var bikeTravelCount = 0
    var footTravelCount = 0
    var cycleTravelCount = 0

    if (req.body.gender === "male") {
        maleCount ++ ;
    }
    else {
        femaleCount ++ ;
    }

    if (req.body.maritalStatus) {
        marriedCount++;
    }
    else {
        unmarriedCount++;
    }

    if (req.body.ageMarried < 18 && req.body.ageMarried > 0) {
        marriedBefore18++;
    }
    else if ( req.body.ageMarried > 18 ) {
        marriedAfter18++;
    }

    switch (req.body.religion) {
        case "hindu":
            hinduCount++;
            break;
        case "muslim":
            muslimCount++;
            break;
        case "sikh":
            sikhCount++;
            break;
        case "christian":
            christianCount++;
            break
    }

    switch (req.body.motherTongue) {
        case "hindi":
            hindiCount++;
            break;
        case "english":
            englishCount++;
            break;
        case "marathi":
            marathiCount++;
            break;
        case "punjabi":
            punjabiCount++;
            break
    }

    switch (req.body.otherLanguage) {
        case "hindi":
            hindiCount++;
            break;
        case "english":
            englishCount++;
            break;
        case "marathi":
            marathiCount++;
            break;
        case "punjabi":
            punjabiCount++;
            break
    }


    if (req.body.isDisabled) {
        disabledCount++;
    }
    else {
        notDisabledCount++;
    }

    if (req.body.isLiterate) {
        literateCount++;
    }
    else {
        illiterateCount++;
    }

    if (req.body.caste === "pandit") {
        panditCount++;
    }
    else {
        baniyaCount++;
    }


    switch (req.body.highestEduLevel) {
        case "10pass":
            pass10Count++;
            break;
        case "12pass":
            pass12Count++;
            break;
        case "undergraduate":
            underGraduateCount++;
            break;
        case "postgraduate":
            postGraduateCount++;
            break
        case "docterate":
            doctorateCount++;
            break
    }

    switch (req.body.occupation) {
        case "farmer":
            farmerCount++;
            break;
        case "dailywageworker":
            dailyWageWorkerCount++;
            break;
        case "sportsperson":
            sportspersonCount++;
            break;
        case "engineer":
            engineerCount++;
            break
        case "docter":
            docterCount++;
            break
    }

    switch (req.body.industry) {
        case "primary":
            primaryServiceCount++;
            break;
        case "secondary":
            secondaryServiceCount++;
            break;
    }

    if (req.body.workedLastYearCount) {
        workedLastYearCount++;
    }
    else {
        notWorkedLastYearCount++;
    }


    if (req.body.lookingForWork) {
        lookingJobCount++;
    }
    else {
        notLookingJobCount++;
    }

    if (req.body.oneWayDisToWork > 10) {
        distance10kmMoreCount++;
    }
    else {
        distance10kmLessCount++;
    }


    switch (req.body.modeOfTravel) {
        case "car":
            carTravelCount++;
            break;
        case "bike":
            bikeTravelCount++;
            break;
        case "foot":
            footTravelCount++;
            break;
        case "cycle":
            cycleTravelCount++;
            break
    }


    Census.findOne({ censusId }, (err, cibil) => {
        if (cibil) {
            
            Census.updateOne({ censusId }, {
                $set: {
                    "maleCount": cibil.maleCount + maleCount,
                    "femaleCount": cibil.femaleCount + femaleCount ,
                    "marriedCount": cibil.marriedCount + marriedCount,
                    "unmarriedCount": cibil.unmarriedCount + unmarriedCount ,
                    "marriedBefore18": cibil.marriedBefore18 + marriedBefore18 ,
                    "marriedAfter18": cibil.marriedAfter18 + marriedAfter18 ,
                    "hinduCount": cibil.hinduCount + hinduCount ,
                    "muslimCount": cibil.muslimCount + muslimCount ,
                    "sikhCount": cibil.sikhCount + sikhCount ,
                    "christianCount": cibil.christianCount + christianCount ,
                    "hindiCount": cibil.hindiCount + hindiCount ,
                    "englishCount": cibil.englishCount + englishCount ,
                    "marathiCount": cibil.marathiCount + marathiCount ,
                    "punjabiCount": cibil.punjabiCount + punjabiCount ,
                    "disabledCount": cibil.disabledCount + disabledCount ,
                    "notDisabledCount": cibil.notDisabledCount + notDisabledCount ,
                    "literateCount": cibil.literateCount + literateCount ,
                    "illiterateCount": cibil.illiterateCount + illiterateCount ,
                    "panditCount": cibil.panditCount + panditCount ,
                    "baniyaCount": cibil.baniyaCount + baniyaCount ,
                    "pass10Count": cibil.pass10Count + pass10Count ,
                    "pass12Count": cibil.pass12Count + pass12Count ,
                    "underGraduateCount": cibil.underGraduateCount + underGraduateCount ,
                    "postGraduateCount": cibil.postGraduateCount + postGraduateCount ,
                    "doctorateCount": cibil.doctorateCount + doctorateCount ,
                    "farmerCount": cibil.farmerCount + farmerCount ,
                    "dailyWageWorkerCount": cibil.dailyWageWorkerCount + dailyWageWorkerCount ,
                    "sportspersonCount": cibil.sportspersonCount + sportspersonCount ,
                    "engineerCount": cibil.engineerCount + engineerCount ,
                    "docterCount": cibil.docterCount + docterCount ,
                    "primaryServiceCount": cibil.primaryServiceCount + primaryServiceCount ,
                    "secondaryServiceCount": cibil.secondaryServiceCount + secondaryServiceCount ,
                    "workedLastYearCount": cibil.workedLastYearCount + workedLastYearCount ,
                    "notWorkedLastYearCount": cibil.notWorkedLastYearCount + notWorkedLastYearCount ,
                    "lookingJobCount": cibil.lookingJobCount + lookingJobCount ,
                    "notLookingJobCount": cibil.notLookingJobCount + notLookingJobCount ,
                    "distance10kmLessCount": cibil.distance10kmLessCount + distance10kmLessCount ,
                    "distance10kmMoreCount": cibil.distance10kmMoreCount + distance10kmMoreCount ,
                    "carTravelCount": cibil.carTravelCount + carTravelCount ,
                    "bikeTravelCount": cibil.bikeTravelCount + bikeTravelCount ,
                    "footTravelCount": cibil.footTravelCount + footTravelCount ,
                    "cycleTravelCount": cibil.cycleTravelCount + cycleTravelCount
                }
            }, (err, response) => {
                if (err) {
                    console.log("Error found ." + err)
                } else {
                    
                }
            })
        }

        if (err || !cibil) {

            const census = new Census({censusId, mohalla, city, district, zipCode, state, maleCount, femaleCount
                , marriedCount, unmarriedCount, marriedBefore18, marriedAfter18, hinduCount, muslimCount, sikhCount,
                christianCount, hindiCount, englishCount, marathiCount, punjabiCount, disabledCount, notDisabledCount,
                literateCount, illiterateCount, panditCount, baniyaCount, pass10Count, pass12Count, underGraduateCount,
                postGraduateCount, doctorateCount, farmerCount, dailyWageWorkerCount, sportspersonCount, engineerCount,
                docterCount, primaryServiceCount, secondaryServiceCount, workedLastYearCount, notWorkedLastYearCount,
                lookingJobCount, notLookingJobCount, distance10kmLessCount, distance10kmMoreCount, carTravelCount,
                bikeTravelCount, footTravelCount, cycleTravelCount})

            census.save((e, census) => {
                if (e) {
                    console.log(e) 
                }
                console.log(census)
            })

        }

    })

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