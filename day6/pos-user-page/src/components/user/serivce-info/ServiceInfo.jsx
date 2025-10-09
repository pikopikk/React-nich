import { RiQuestionFill, RiCheckboxCircleFill, RiCloseCircleFill } from "@remixicon/react"
import { Link } from "react-router-dom"


export default function ServiceInfo() {
  const services = [
    {
      name: 'Dine-in',
      available: true,
      iconStatus: <RiCheckboxCircleFill className="text-success inline-block ml-2 w-5 h-5" /> ,
    },
    {
      name: 'Take Away',
      available: true,
      iconStatus: <RiCheckboxCircleFill className="text-success inline-block ml-2 w-5 h-5" /> ,
    },
    {
      name: 'Delivery',
      available: true,
      iconStatus: <RiCloseCircleFill className="text-error inline-block ml-2 w-5 h-5" />,
    },
  ]

  return(
    <section className="px-5 flex flex-col items-center gap-2 py-4 bg-gradient-to-r from-[#F1F0E4] to-white">
      <h2 className="text-2xl font-bold text-stone-900 flex flex-row items-center gap-2">
        Informasi Layanan 
        <Link to={'/InformasiLayanan'}>
          <RiQuestionFill className="w-5 h-5 text text-[#7D8D86]"/>
        </Link>
      </h2>

      <div className="flex flex-row gap-3">
        {services.map((service, index) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
            <Link className="text-stone-900 underline" to={'/InformasiLayanan'}>
              {service.name} 
              {service.iconStatus}
            </Link>
            {index < services.length - 1 && (
              <span className="w-[1px] h-5 bg-[#3E3F29] inline-block"/>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}