import BuyPath from "./BuyPath";

export default function BuyPathContent(){
  const steps = [
    {
      id: "pilih-menu",
      step: "Pertama",
      title: "Pilih Menu",
      desc: "Telusuri daftar menu yang tersedia dan pilih makanan atau minuman yang Anda inginkan. Jangan lupa membaca deskripsi dan harga sebelum menambahkan ke pesanan.",
    },
    {
      id: "checkout",
      step: "Kedua",
      title: "Checkout",
      desc: "Setelah selesai memilih menu, lanjutkan ke halaman checkout untuk meninjau kembali pesanan Anda. Di sini Anda dapat memastikan jumlah dan menambahkan catatan tambahan jika diperlukan.",
    },
    {
      id: "bayar",
      step: "Ketiga",
      title: "Bayar Pesanan",
      desc: "Lakukan pembayaran sesuai metode yang Anda pilih, baik melalui kasir, QRIS, atau metode non-tunai lainnya. Pastikan transaksi berhasil sebelum melanjutkan.",
    },
    {
      id: "waiting-list",
      step: "Keempat",
      title: "Waiting List",
      desc: "Setelah pembayaran dikonfirmasi, pesanan Anda akan masuk ke daftar antrian dapur. Silakan tunggu beberapa saat hingga pesanan Anda selesai disiapkan.",
    },
  ]

  return(
    <section className="mt-[64px]">
      <div className="px-5 py-4 bg-gradient-to-b from-[#F1F0E4] to-white">
        <BuyPath/>
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-5 py-4 bg-[#F1F0E4]">
        {steps.map((item, index) =>
          <li id={item.id} key={index}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  className="text-stone-900"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end text-stone-900">
              <time className="font-mono italic">{item.step}</time>
              <div className="text-xl font-black">{item.title}</div>
              <p className="pt-1">
                {item.desc}
              </p>
            </div>
            <hr/>
          </li>
        )}
      </ul> 
    </section>
  )
}