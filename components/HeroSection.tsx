
import { Button } from "./ui/button"

const HeroSection = () => {
  return (
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Servicios para tu hogar, en un solo lugar.
              </h1>
              <p className="text-base md:text-xl mb-8 leading-relaxed">
                Soluciones rápidas, confiables y profesionales en mantenimiento,
                instalación y mejoras del hogar. Nos encargamos de todo, para
                que no tengas que preocuparte.
              </p>
              <div className="flex gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-[#FFC527] cursor-pointer text-lg text-black font-medium px-6 md:px-8"
                >
                  Hablemos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-4 md:px-8 font-medium text-lg cursor-pointer bg-white text-black"
                >
                  <a href="#servicios">
                    Conocé los servicios
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">60+</div>
                  <div className="text-sm">Proyectos completados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm">Clientes satisfechos</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}
export default HeroSection