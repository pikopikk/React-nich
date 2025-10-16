import express from "express";
import { createTransaction } from "../controllers/paymentController.js";

const router = express.Router();

// POST /api/payment/create-transaction
router.post("/create-transaction", createTransaction);

export default router;
