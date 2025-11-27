const express = require("express");
const { authenticate } = require("../middlewares/authentication");
const router = express.Router();
const {
  generatePaymentLink,
  updataPaymentsInfoInDb,
} = require("../controllers/paymentController");

router.post("/:id", authenticate, generatePaymentLink);
router.get('/:id',  updataPaymentsInfoInDb)

module.exports = router