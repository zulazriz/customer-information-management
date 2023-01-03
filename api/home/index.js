const express = require("express");
const router = express.Router();
// const knex = require("../../connection"); //db
const model = require("../../function/user"); // INCLUDE FUNCTION FILE

router.get("/", async (req, res) => {
    res.send("Hello world");
});

module.exports = router;
