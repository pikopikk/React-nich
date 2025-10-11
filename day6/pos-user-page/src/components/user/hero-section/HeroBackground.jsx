import { useEffect, useState } from 'react'
import hero1 from '../../../assets/images/hero-section/hero1.png'
import hero2 from '../../../assets/images/hero-section/hero2.png'
import hero3 from '../../../assets/images/hero-section/hero3.png'
import hero4 from '../../../assets/images/hero-section/hero4.png'


export default function HeroBackground(){  
  const heroBG = [hero1, hero2, hero3, hero4]
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === heroBG.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [heroBG.length]);

  return(
    <>
      {heroBG.map((src, index)=>(
      <div key={index} className="carousel-item w-full h-full flex items-center justify-center bg-[#00000049]">
        <img
          src={src}
          alt={`hero ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      </div>
      ))}
      <div className="absolute inset-0 bg-stone-900/30 z-10" />
    </>
  )
}