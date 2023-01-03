const express = require("express");
const router = express.Router();

router.use('/', require("./home"));
router.use('/customer', require("./customer"));

module.exports = router;