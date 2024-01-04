const express = require("express");
const { testController } = require("../controllers/testContoller");

// router object
const router = express.Router()

// routes
router.get("/test", testController);

// export
module.exports = router;