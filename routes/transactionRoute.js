const express = require("express");
const { addTransaction, getAllTransactions, editTransaction, deleteTransaction } = require("../controllers/transactionController");

//router object
const router = express.Router();

//routers
// POST || add-transaction method
router.post("/add-transaction", addTransaction);

// POST || edit-transaction method
router.post("/edit-transaction", editTransaction);

// POST || delete-transaction method
router.post("/delete-transaction", deleteTransaction);

// GET || get-all-transactions method
router.post("/get-all-transactions", getAllTransactions);

module.exports = router;