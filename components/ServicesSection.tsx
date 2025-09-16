import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda - Grid con imágenes */}
        <div className="grid grid-cols-2 grid-rows-2 gap-8 relative">
          {/* Imagen alta izquierda */}
          <div className="row-span-2 relative rounded-xl overflow-hidden">
            <Image
              src="/electricista.jpg"
              alt="Electricista"
              width={500}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen arriba derecha */}
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/plomero.jpg"
              alt="Plomero"
              width={500}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen abajo derecha */}
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/tecnico.jpg"
              alt="Técnico"
              width={500}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card amarillo */}
          <div className="absolute flex flex-col items-center gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFC527] text-black rounded-3xl w-[150px] py-8 shadow-lg max-w-xs text-center font-bold z-0">
            <div>
              <p className="text-3xl md:text-5xl">50+</p>
              <p className="text-base">Proyectos</p>
            </div>
            <hr className="border-black w-30" />
            <div>
              <p className="text-3xl md:text-5xl">20+</p>
              <p className="text-lg">Servicios</p>
            </div>
          </div>
        </div>

        {/* Columna derecha - Texto con íconos */}
        <div className="text-black">
          <h3 className="uppercase text-sm tracking-widest mb-2">
            24/7 Sin Complicaciones
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Servicios de instalación <br /> para hogares y negocios
          </h2>
          <p className="text-gray-600 mb-8">
            Imperdiet massa tincidunt nunc pulvinar sapien. Sit amet facilisis
            magna etiam odio mollis. Entero lacus ligula, imperdiet vel massa
            in, maximus suscipit turpis.
          </p>

          {/* Lista de beneficios */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="md:w-12 md:h-12 p-1.5 flex items-center justify-center bg-[#FFC527] rounded-full">
                {/* Acá va tu ícono SVG */}
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Consulta más temprana</h4>
                <p className="text-gray-600">
                  Felis bibendum ut tristique et egestas quis ipsum suspendisse
                  ultrices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="md:w-12 md:h-12 p-1.5 flex items-center justify-center bg-[#FFC527] rounded-full">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h8l6 6v8a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  Solución personalizada
                </h4>
                <p className="text-gray-600">
                  Augue interdum velit euismod in pellentesque massa placerat
                  duis ultricies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="md:w-12 md:h-12 p-1.5 flex items-center justify-center bg-[#FFC527] rounded-full">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 12H4"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Precios asequibles</h4>
                <p className="text-gray-600">
                  Quien o eros hasta y odian el tiempo. Praesent semper feugiat
                  nibh sed pulvinar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="md:w-12 md:h-12 p-1.5 flex items-center justify-center bg-[#FFC527] rounded-full">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16h8M8 12h8m-6 8h6M6 4h12v16H6V4z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Servicio todo en uno</h4>
                <p className="text-gray-600">
                  Pellentesque id nibh tortor id. Quis vel eros donec ac odio
                  facilisi nullam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
