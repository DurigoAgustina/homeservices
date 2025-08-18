import Image from "next/image"

export default function ExperienceSection() {
  const services = [
    {
      title: "Sanitary Plumbing",
      description:
        "Risus feugiat in ante metus dictum at. Dignissim convallis aenean et tortor at quisque mauris.",
      image: "/img/plumbing.jpg",
    },
    {
      title: "Air Condition Installation",
      description:
        "Vel pharetra vel turpis nunc eget lorem. Tortor vitae purus faucibus ornare suspendisse sed.",
      image: "/img/air-condition.jpg",
    },
    {
      title: "Cabinet Making",
      description:
        "Fermentum dui faucibus in ornare quam viverra orci. Metus aliquam eleifend mi.",
      image: "/img/cabinet.jpg",
    },
    {
      title: "Window Carpentry",
      description:
        "Turpis nunc eget lorem dolor sed viverra ipsum. Pharetra sit amet aliquam id diam neque.",
      image: "/img/carpentry.jpg",
    },
  ]

  return (
    <section className="bg-[#FFC527] text-black py-16">
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
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {/* Imagen */}
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Texto */}
              <div className="p-5">
                <h3 className="font-bold text-lg flex items-center justify-between">
                  {service.title}
                  <span className="text-2xl">→</span>
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
