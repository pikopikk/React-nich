import { RiCheckboxCircleFill, RiCloseCircleFill } from "@remixicon/react";

export default function ServiceInfoContent() {

  const services = [
    {
      id: 1,
      title: "Dine-In",
      icon: <RiCheckboxCircleFill />,
      desc: "Nikmati suasana nyaman dan pelayanan terbaik langsung di tempat kami, cocok untuk bersantai bersama teman atau keluarga.",
      available: true,
    },
    {
      id: 2,
      title: "Take Away",
      icon: <RiCheckboxCircleFill />,
      desc: "Pesan menu favoritmu, perhatikan informasi serta notifiaksi antrian, dan bawa pulang tanpa harus menunggu di tempat.",
      available: true,
    },
    {
      id: 3,
      title: "Delivery",
      icon: <RiCloseCircleFill />,
      desc: (
        <>
          Website ini disediakan khusus untuk Anda yang ingin melakukan pemesanan secara langsung. Untuk pemesanan daring, silakan kunjungi platform mitra resmi kami di
          {" "}
          <a href="#" className="underline hover:text-[#BCA88D]">Gojek</a>
          {" atau "}
          <a href="#" className="underline hover:text-[#BCA88D]">ShopeeFood</a>.
        </>
      ),
      available: false,
    },
  ];

  return (
    <section className="mt-[64px]">
      <div className="bg-gradient-to-b from-[#F1F0E4] to-white py-4 px-5">
        <ServiceInfoContentHead />
      </div>

      {/* Bagian Konten Layanan */}
      <div className="ezy__about3 light px-10 bg-[#F1F0E4] text-stone-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center py-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-center items-center gap-1 py-4"
              >
                <div className="flex flex-row items-center gap-2">
                  <h5 className="text-xl font-bold">{service.title}</h5>
                  {service.icon}
                </div>
                <p className="text-sm opacity-80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceInfoContentHead() {
  return (
    <div className="bg-gradient-to-b from-[#F1F0E4] to-white flex flex-col items-center justify-center text-center text-stone-900 ">
      <div className="bg-white rounded-2xl py-4 px-5 shadow-md">
        <h1 className="text-2xl leading-none font-bold">Layanan Kami</h1>
        <div className="max-w-xl flex flex-col pt-2 gap-2">
          <p>
            Pelanggan yang kami hormati, agar setiap kunjungan dan pesanan yang Anda buat berjalan dengan nyaman dan sesuai harapan, kami berharap Anda dapat membaca dan memahami halaman ini. 
          </p>
          <p>
            Terima kasih atas perhatian dan pengertiannya.
            <br />
            Salam hangat dari kami, <strong>Guritayaki</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
