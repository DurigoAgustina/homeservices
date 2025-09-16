import Image from "next/image"

export default function ExperienceSection() {
  const services = [
    {
      title: "Colocación de cerámicos",
      description:
        "Colocación de cerámicos, porcelanatos y revestimientos. Soluciones para pisos y paredes.",
      image: "/ceramicos.jpg",
    },
    {
      title: "Electricidad",
      description:
        "Instalaciones eléctricas seguras y eficientes. Mantenimiento y reparación de sistemas eléctricos.",
      image: "/electricista.jpg",
    },
    {
      title: "Plomería",
      description:
        "Servicios de plomería confiables y eficientes. Instalación y reparación de sistemas de fontanería.",
      image: "/plomeria.jpg",
    },
    {
      title: "Cámaras de seguridad",
      description:
        "Instalación y mantenimiento de sistemas de cámaras de seguridad. Protección y vigilancia para su hogar o negocio.",
      image: "/camaras.jpg",
    },
  ]

  return (
  <section
  className="text-black py-16 bg-[#FFC527]"
  // style={{
  //   background: "linear-gradient(to bottom,  50%, #FFFFFF 50%)"
  // }}
>
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    {/* Header */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div>
        <h3 className="uppercase text-sm tracking-widest mb-2">Nuestros Servicios</h3>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Soluciones efectivas para cada necesidad
        </h2>
      </div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div key={index} className="overflow-hidden">
          {/* Imagen */}
          <div className="relative h-56">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Texto */}
          <div className="p-5">
            <h3 className="font-bold text-lg flex items-center justify-between">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base mt-2">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}
