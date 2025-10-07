import HeroBackground from "./HeroBackground";

export default function Hero(){
  return(
    <section className="relative w-full h-80 overflow-hidden">
      <div className="pointer-events-none inset-0 absolute flex items-center justify-center z-10">
        <h1 className="text-4xl font-bold text-white">
          kasih kata2
        </h1>
      </div>

      <div className="relative carousel w-full h-full">
        <HeroBackground/>
      </div>
    </section>
  )
}