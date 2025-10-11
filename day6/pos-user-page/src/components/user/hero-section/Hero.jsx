import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative w-full mt-[64px] h-[260px] overflow-hidden">
      {/* Layer gambar paling bawah */}
      <HeroBackground />

      {/* Layer teks di atas */}
      <div className="absolute inset-0 z-20 flex flex-col gap-2 items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-md">
            Takoyaki Terbaik
          </h1>
          <h2 className="text-2xl font-bold text-white drop-shadow-sm">
            Tasikmalaya
          </h2>
        </div>

        <div className="flex flex-row gap-2 mt-3 pointer-events-auto">
          <a href="#features" className="btn-costum-1">
            Klik di sini
          </a>
          <p className="text-base font-bold text-white">Untuk Pesan</p>
        </div>
      </div>
    </section>
  );
}
