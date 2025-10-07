import { RiCheckboxCircleFill, RiCloseCircleFill, RiRestaurantFill, RiShoppingBag2Fill, RiTakeawayFill  } from "@remixicon/react"

export default function ServiceInfo() {
  const services = [
    {
      name: 'Dine-in',
      available: true,
      icon: <RiRestaurantFill/>,
      iconClick: <RiCheckboxCircleFill className="text-success inline-block ml-2" />,
    },
    {
      name: 'Take Away',
      available: true,
      icon: <RiShoppingBag2Fill/>,
      iconClick: <RiCheckboxCircleFill className="text-success inline-block ml-2" />,
    },
    {
      name: 'Delivery',
      available: true,
      icon: <RiTakeawayFill/>,
      iconClick: <RiCloseCircleFill className="text-error inline-block ml-2" />,
    },
  ]

  return(
    <section className="mx-5">
      <h2>
        Informasi Layanan
      </h2>

      <div>
        {services.map((service, index) => (
        <div key={index} className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            {service.icon}
          </div>

          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a className="underline">
                {service.name} <span>{service.iconClick}</span>
              </a>
            </li>
          </ul>
        </div>
        ))}
      </div>
    </section>
  )
}