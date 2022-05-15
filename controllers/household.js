const Household = require("../models/household")
const HouseholdCount = require("../models/householdcount")
require('express-jwt');

const create = (req, res) => {
    const { id, mohalla, city, district, zipCode, state } = req.body

    const censusId = mohalla + city + district + zipCode + state
    var mudFloorCount = 0
    var cementFloorCount = 0
    var marbleFloorCount = 0
    var mudRoofCount = 0
    var woodenRoofCount = 0
    var cementRoofCount = 0
    var mudWallCount = 0
    var cementWallCount = 0
    var wookenWallCount = 0
    var goodConditionHouseCount = 0
    var badConditionHouseCount = 0
    var room1Count = 0
    var room2Count = 0
    var room3Count = 0
    var room4Count = 0
    var room5Count = 0
    var room5MoreCount = 0
    var person1Count = 0
    var person2Count = 0
    var person3Count = 0
    var person4Count = 0
    var person5Count = 0
    var person5MoreCount = 0
    var couple1Count = 0
    var couple2Count = 0
    var couple2MoreCount = 0
    var govWaterCount = 0
    var selfWaterCount = 0
    var hour12AvailCount = 0
    var hour24AvailCount = 0
    var candleCount = 0
    var electricityCount = 0
    var latrineCount = 0
    var noLatrineCount = 0
    var kitchenCount = 0
    var noKitchenCount = 0
    var lpgCount = 0
    var pngCount = 0
    var noLpgPngCount = 0
    var radioCount = 0
    var noRadioCount = 0
    var televisionCount = 0
    var noTelevisionCount = 0
    var internetCount = 0
    var noInternetCount = 0
    var laptopCount = 0
    var noLaptopCount = 0
    var bikeCount = 0
    var noBikeCount = 0


    switch (req.body.floorMaterial) {
        case "mud":
            mudFloorCount++;
            break;
        case "cement":
            cementFloorCount++;
            break;
        case "marble":
            marbleFloorCount++;
            break;
    }

    switch (req.body.roofMaterial) {
        case "mud":
            mudRoofCount++;
            break;
        case "cement":
            cementRoofCount++;
            break;
        case "wooden":
            woodenRoofCount++;
            break;
    }

    switch (req.body.wallMaterial) {
        case "mud":
            mudWallCount++;
            break;
        case "cement":
            cementWallCount++;
            break;
        case "wooden":
            woodenWallCount++;
            break;
    }

    switch (req.body.conditionCensusHousehold) {
        case "good":
            goodConditionHouseCount++;
            break;
        case "bad":
            badConditionHouseCount++;
            break;
    }

    switch (req.body.noRooms) {
        case 1:
            room1Count++;
            break;
        case 2:
            room2Count++;
            break;
        case 3:
            room3Count++;
            break;
        case 4:
            room4Count++;
            break;
        case 5:
            room5Count++;
            break;
        default:
            room5MoreCount++;
            break;
    }

    switch (req.body.noPersons) {
        case 1:
            person1Count++;
            break;
        case 2:
            person2Count++;
            break;
        case 3:
            person3Count++;
            break;
        case 4:
            person4Count++;
            break;
        case 5:
            person5Count++;
            break;
        default:
            person5MoreCount++;
            break;
    }

    switch (req.body.noMarriedCouples) {
        case 1:
            couple1Count++;
            break;
        case 2:
            couple2Count++;
            break;
        default:
            couple2MoreCount++;
            break;
    }

    switch (req.body.drinkingSource) {
        case "gov":
            govWaterCount++;
            break;
        case "self":
            selfWaterCount++;
            break;
    }

    switch (req.body.drinkingSourceAvailability) {
        case "12":
            hour12AvailCount++;
            break;
        case "24":
            hour24AvailCount++;
            break;
    }

    switch (req.body.lightingSource) {
        case "candle":
            candleCount++;
            break;
        case "electricity":
            electricityCount++;
            break;
    }

    if (req.body.latrine) {
        latrineCount++;
    }
    else {
        noLatrineCount++;
    }

    if (req.body.kitchen) {
        kitchenCount ++ ;
    }
    else {
        noKitchenCount ++ ;
    }

    if ( ! req.body.lpgPngConnection) {
        noLpgPngCount ++ ;
    }

    switch (req.body.mainFuelCooking) {
        case "lpg":
            lpgCount ++ ;
            break;
        case "png":
            pngCount ++ ;
            break;
    }

    if (req.body.radio) {
        radioCount ++ ;
    }
    else {
        noRadioCount ++ ;
    }

    if (req.body.television) {
        televisionCount ++ ;
    }
    else {
        noTelevisionCount ++ ;
    }

    if (req.body.internet) {
        internetCount ++ ;
    }
    else {
        noInternetCount ++ ;
    }

    if (req.body.laptop) {
        laptopCount ++ ;
    }
    else {
        noLaptopCount ++ ;
    }

    if (req.body.bike) {
        bikeCount ++ ;
    }
    else {
        noBikeCount ++ ;
    }


    HouseholdCount.findOne({ censusId }, (err, cibil) => {
        if (cibil) {

            HouseholdCount.updateOne({ censusId }, {
                $set: {
                    "mudFloorCount": cibil.mudFloorCount + mudFloorCount,
                    "cementFloorCount": cibil.cementFloorCount + cementFloorCount,
                    "marbleFloorCount": cibil.marbleFloorCount + marbleFloorCount,
                    "mudRoofCount": cibil.mudRoofCount + mudRoofCount,
                    "woodenRoofCount": cibil.woodenRoofCount + woodenRoofCount,
                    "cementRoofCount": cibil.cementRoofCount + cementRoofCount,
                    "mudWallCount": cibil.mudWallCount + mudWallCount,
                    "cementWallCount": cibil.cementWallCount + cementWallCount,
                    "wookenWallCount": cibil.wookenWallCount + wookenWallCount,
                    "goodConditionHouseCount": cibil.goodConditionHouseCount + goodConditionHouseCount,
                    "badConditionHouseCount": cibil.badConditionHouseCount + badConditionHouseCount,
                    "room1Count": cibil.room1Count + room1Count,
                    "room2Count": cibil.room2Count + room2Count,
                    "room3Count": cibil.room3Count + room3Count,
                    "room4Count": cibil.room4Count + room4Count,
                    "room5Count": cibil.room5Count + room5Count,
                    "room5MoreCount": cibil.room5MoreCount + room5MoreCount,
                    "person1Count": cibil.person1Count + person1Count,
                    "person2Count": cibil.person2Count + person2Count,
                    "person3Count": cibil.person3Count + person3Count,
                    "person4Count": cibil.person4Count + person4Count,
                    "person5Count": cibil.person5Count + person5Count,
                    "person5MoreCount": cibil.person5MoreCount + person5MoreCount,
                    "couple1Count": cibil.couple1Count + couple1Count,
                    "couple2Count": cibil.couple2Count + couple2Count,
                    "couple2MoreCount": cibil.couple2MoreCount + couple2MoreCount,
                    "govWaterCount": cibil.govWaterCount + govWaterCount,
                    "selfWaterCount": cibil.selfWaterCount + selfWaterCount,
                    "hour12AvailCount": cibil.hour12AvailCount + hour12AvailCount,
                    "hour24AvailCount": cibil.hour24AvailCount + hour24AvailCount,
                    "candleCount": cibil.candleCount + candleCount,
                    "electricityCount": cibil.electricityCount + electricityCount,
                    "latrineCount": cibil.latrineCount + latrineCount,
                    "noLatrineCount": cibil.noLatrineCount + noLatrineCount,
                    "kitchenCount": cibil.kitchenCount + kitchenCount,
                    "noKitchenCount": cibil.noKitchenCount + noKitchenCount,
                    "lpgCount": cibil.lpgCount + lpgCount,
                    "pngCount": cibil.pngCount + pngCount,
                    "noLpgPngCount": cibil.noLpgPngCount + noLpgPngCount,
                    "radioCount": cibil.radioCount + radioCount,
                    "noRadioCount": cibil.noRadioCount + noRadioCount,
                    "televisionCount": cibil.televisionCount + televisionCount,
                    "noTelevisionCount": cibil.noTelevisionCount + noTelevisionCount,
                    "internetCount": cibil.internetCount + internetCount,
                    "noInternetCount": cibil.noInternetCount + noInternetCount,
                    "laptopCount": cibil.laptopCount + laptopCount,
                    "noLaptopCount": cibil.noLaptopCount + noLaptopCount,
                    "bikeCount": cibil.bikeCount + bikeCount,
                    "noBikeCount": cibil.noBikeCount + noBikeCount,
                }
            }, (err, response) => {
                if (err) {
                    console.log("Error found ." + err)
                } else {
                    console.log(response)
                }
            })
        }

        if (err || !cibil) {

            const householdCount = new HouseholdCount({
                censusId, mohalla, city, district, zipCode, state, mudFloorCount, cementFloorCount,
                marbleFloorCount, mudRoofCount, woodenRoofCount, cementRoofCount, mudWallCount, cementWallCount,
                wookenWallCount, goodConditionHouseCount, badConditionHouseCount, room1Count, room2Count, room3Count,
                room4Count, room5Count, room5MoreCount, person1Count, person2Count, person3Count, person4Count,
                person5Count, person5MoreCount, couple1Count, couple2Count, couple2MoreCount, govWaterCount, selfWaterCount,
                hour12AvailCount, hour24AvailCount, candleCount, electricityCount, latrineCount, noLatrineCount, kitchenCount,
                noKitchenCount, lpgCount, pngCount, noLpgPngCount, radioCount, noRadioCount, televisionCount,
                noTelevisionCount, internetCount, noInternetCount, laptopCount, noLaptopCount, bikeCount, noBikeCount
            })

            householdCount.save((e, census) => {
                if (e) {
                    console.log(e)
                }
                console.log(census)
            })

        }

    })


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