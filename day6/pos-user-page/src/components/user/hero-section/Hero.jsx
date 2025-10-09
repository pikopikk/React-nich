import HeroBackground from "./HeroBackground";

export default function Hero(){
  return(
    <section className="relative w-full mt-[64px] h-[260px] overflow-hidden">
      <div className="pointer-events-auto inset-0 absolute flex flex-col gap-2 items-center justify-center z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Takoyaki Terbaik
          </h1>
          <h2 className="text-2xl font-bold text-white">
            Tasikmalaya
          </h2>
        </div>

        <div className="flex flex-row gap-2">
          <a href="#features" className="btn-costum-1">
            Klik di sini
          </a>
          <p className="text-base font-bold">
            Untuk Pesan
          </p>
        </div>
      </div>

      <div className="relative carousel w-full h-full">
        <HeroBackground/>
      </div>
    </section>
  )
}