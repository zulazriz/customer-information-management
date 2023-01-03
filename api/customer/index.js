const express = require("express");
const router = express.Router();
// const knex = require("../../connection"); //db
const model = require("../../function/customer"); // INCLUDE FUNCTION FILE
var bodyParser = require('body-parser')

router.post("/RegisterCustomer", async (req, res) => {
    let params = null;
    let result = null;

    // VARIABLE SETUP
    let userFname = null;
    let userLname = null;
    let userPhone = null;
    let userEmail = null;

    console.log(req.body.params.userFname)

    try {

        // BIND PARAMETER TO VARIABLES
        params = req.body.params;

        userFname = params.userFname;
        userLname = params.userLname;
        userEmail = params.userEmail;
        userPhone = params.userPhone;

        // INSERT CUSTOMER
        let regcustomer = await model.regCust(
            userFname,
            userLname,
            userEmail,
            userPhone
        )
        console.log(regcustomer)

        if (regcustomer != false) {
            result = {
                status: "berjaya",
                message: "Register success!",
            };
        } else {
            result = {
                status: "gagal",
                message: 'Register error!'
            }
        }


    } catch (error) {
        console.log(error); // LOG ERROR
        result = {
            message: error,
        };
    }

    // RETURN
    res.status(200).json(result)
});

router.get("/ViewCustomer", async (req, res) => {
    let result = null;

    try {

        // SELECT CUSTOMER
        let selectcust = await model.selectCust(
        )
        console.log(selectcust)

        if (selectcust != false) {
            result = {
                status: "berjaya",
                data: selectcust,
                message: "Register success!",
            };
        } else {
            result = {
                status: "gagal",
                message: 'Register error!'
            }
        }
    } catch (error) {
        console.log(error); // LOG ERROR
        result = {
            message: error,
        };
    }

    // RETURN
    res.status(200).json(result)
});

router.get("/ViewSpecificCustomer", async (req, res) => {
    let result = null;
    let params = null;

    // VARIABLE SETUP
    let id = null;

    try {
        // BIND PARAMETER TO VARIABLES
        params = req.query;

        id = params.id;

        //SELECT SPECIFIC CUSTOMER
        let selectspeccust = await model.selectspeccust(id)

        if (selectspeccust != false) {
            result = {
                status: "berjaya",
                data: selectspeccust,
                message: "Success!",
            };
        } else {
            result = {
                status: "gagal",
                message: 'Error!'
            }
        }
    } catch (error) {
        console.log(error); // LOG ERROR
        result = {
            message: error,
        };
    }

    // RETURN
    res.status(200).json(result)
});

router.post("/UpdateCustomer", async (req, res) => {
    let params = null;
    let result = null;

    // VARIABLE SETUP
    let userFname = null;
    let userLname = null;
    let userPhone = null;
    let userEmail = null;
    let userId = null;

    try {

        // BIND PARAMETER TO VARIABLES
        params = req.body.params;

        userFname = params.userFname;
        userLname = params.userLname;
        userEmail = params.userEmail;
        userPhone = params.userPhone;
        userId = params.id;

        // UPDATE CUSTOMER
        let updcust = await model.updateCust(
            userId,
            userFname,
            userLname,
            userEmail,
            userPhone
        )
        console.log(updcust)

        if (updcust != false) {
            result = {
                status: "berjaya",
                message: "Update success!",
            };
        } else {
            result = {
                status: "gagal",
                message: 'Update error!'
            }
        }
    } catch (error) {
        console.log(error); // LOG ERROR
        result = {
            message: error,
        };
    }

    // RETURN
    res.status(200).json(result)
});

router.post("/DeleteCustomer", async (req, res) => {
    let params = null;
    let result = null;

    // VARIABLE SETUP
    let userId = null;

    try {

        //BIND PARAMETER TO VARIABLES
        params = req.body.params;

        userId = params.id;

        //DELETE CUSTOMER
        let delcust = await model.deleteCust(
            userId
        )
        console.log(delcust)

        if (delcust != false) {
            result = {
                status: "berjaya",
                message: "Delete success!",
            };
        } else {
            result = {
                status: "gagal",
                message: 'Delete error!'
            }
        }
    } catch (error) {
        console.log(error); // LOG ERROR
        result = {
            message: error,
        };
    }

    // RETURN
    res.status(200).json(result)
});

module.exports = router;
