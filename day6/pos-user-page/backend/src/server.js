/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ROUTES
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend berjalan. Endpoint utama: /api/payment/create-transaction");
});

app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
