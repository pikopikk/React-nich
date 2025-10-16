import midtransClient from "midtrans-client";

export const createTransaction = async (req, res) => {
  try {
    const { orderId, grossAmount, customerName } = req.body;

    // Inisialisasi Midtrans Snap Client
    const snap = new midtransClient.Snap({
      isProduction: false,
      // eslint-disable-next-line no-undef
      serverKey: process.env.MIDTRANS_SERVER_KEY,
    });

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount,
      },
      customer_details: {
        first_name: customerName,
      },
    };

    // Buat transaksi dan dapatkan token
    const transaction = await snap.createTransaction(parameter);

    res.status(200).json({
      success: true,
      message: "Transaksi berhasil dibuat",
      token: transaction.token,
    });
  } catch (error) {
    console.error("❌ Midtrans error:", error.message);
    res.status(500).json({
      success: false,
      message: "Gagal membuat transaksi",
    });
  }
};
