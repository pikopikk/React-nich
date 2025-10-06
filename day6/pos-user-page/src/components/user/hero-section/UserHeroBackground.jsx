import hero1 from '../../../assets/images/user/hero-section/hero1.png'
import hero2 from '../../../assets/images/user/hero-section/hero2.png'
import hero3 from '../../../assets/images/user/hero-section/hero3.png'
import hero4 from '../../../assets/images/user/hero-section/hero4.png'


export default function UserHeroBackground(){
  const heroBG = [hero1, hero2, hero3, hero4]

  return(
    <>
      {heroBG.map((src, index)=>(
      <div key={index} className="carousel-item w-full h-full flex items-center justify-center bg-[#00000049]">
        <img
          className="absolute -z-10 w-full h-full"
          src={src}
          alt={`hero ${index + 1}`}
        />
      </div>
      ))}
    </>
  )
}