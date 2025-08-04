"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Instagram} from "lucide-react";
import WhatsApp from "@/public/whatsappIcon.svg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
              <Home className="h-6 w-6 text-teal-500" />
              Homes
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-900 font-medium">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-600 hover:text-gray-900">
                Servicios
              </a>
              {/* <a href="#nuestros-trabajos" className="text-gray-600 hover:text-gray-900">
                Nuestro Trabajo
              </a> */}
              <a href="/contact" className="text-gray-600 hover:text-gray-900">
                Contacto
              </a>
            </div>

            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
            >
              <a href="https://wa.me/5493517730127" target="_blank" rel="noopener noreferrer">
                Contactanos
              </a>
            </Button>
          </div>
        </div>
      </nav>
      <div>
        <Link href="https://wa.me/5493517730127" target="_blank" className="fixed bottom-5 right-5 rounded-full p-2 z-50 bg-[#29A71A]">
            <Image src="/whatsapp.png" alt="Contact Icon" width={40} height={40} />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Servicios para tu hogar, en un solo lugar.
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-8 leading-relaxed">
                Soluciones rápidas, confiables y profesionales en mantenimiento,
                instalación y mejoras del hogar. Nos encargamos de todo, para
                que no tengas que preocuparte.
              </p>
              <div className="flex gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-teal-500 cursor-pointer hover:bg-teal-600 text-white px-8"
                >
                  Hablemos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 bg-transparent cursor-pointer"
                >
                  <a href="#servicios">
                    Conocé los servicios
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">60+</div>
                  <div className="text-sm text-gray-600">Proyectos completados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Clientes satisfechos</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/work-1.png"
                  alt="Professional home services expert"
                  width={900}
                  height={900}
                  className="rounded-lg"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-30 md:top-40 right-0 bg-teal-500 text-white p-2 md:p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <span className="text-xs md:text-sm font-medium">Plomería</span>
                </div>
              </div>

              <div className="absolute lg:top-50 top-50 md:right-110 bg-teal-500 text-white p-2 md:p-4 rounded-lg shadow-lg z-20">
                <div className="text-xs font-semibold md:text-sm md:font-medium">Instalación</div>
                <div className="text-xs opacity-90">cámaras de seguridad</div>
              </div>

              <div className="absolute top-10 right-30 md:right-130 bg-teal-500 text-white p-2 md:p-4 rounded-lg shadow-lg z-20">
                <div className="text-xs md:text-sm font-medium">Electricidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Nuestros Servicios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/rodillo.png"
                    alt="Roller icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">Pintura</h3>
                <p className="text-gray-600">
                  Renovamos tus espacios con acabados prolijos, modernos y
                  duraderos. Interior y exterior.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/electricista.png"
                    alt="Electricity icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">Electricidad</h3>
                <p className="text-gray-600">
                  Instalaciones, reparaciones y mantenimiento eléctrico con
                  total seguridad y cumplimiento de normas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/camara-de-video.png"
                    alt="Camera icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Instalación de cámaras de seguridad
                </h3>
                <p className="text-gray-600">
                  Protegé tu hogar con sistemas de vigilancia eficientes,
                  adaptados a tus necesidades.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/plomero.png"
                    alt="Plumbing icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">Plomería</h3>
                <p className="text-gray-600">
                  Solucionamos filtraciones, caños rotos e instalaciones
                  sanitarias con rapidez y profesionalismo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/suelo.png"
                    alt="Flooring icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Colocación de cerámicos
                </h3>
                <p className="text-gray-600">
                  Colocamos cerámicos, porcelanatos y revestimientos con
                  precisión, nivelado y terminaciones profesionales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/electric.png"
                alt="Smart home control system"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                Siempre cuidando hogares como el tuyo
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                Somos un equipo de profesionales especializados en brindar
                soluciones integrales para el hogar. Trabajamos con compromiso,
                eficiencia y atención personalizada para que cada cliente se
                sienta seguro y satisfecho.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 cursor-pointer text-white px-8">
                <a href="https://wa.me/5493517730127" className="text-white" target="_blank" rel="noopener noreferrer">
                  Contactanos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="md:grid flex flex-col-reverse lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                Viví la experiencia de un servicio a otro nivel.
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                Combinamos experiencia, tecnología y compromiso para ofrecerte soluciones de calidad, pensadas para el hogar moderno.
              </p>
              {/* <Button className="bg-teal-500 cursor-pointer hover:bg-teal-600 text-white px-8">
                Conocé más
              </Button> */}
            </div>
            <div className="">
              <Image
                src="/smart.png"
                alt="Professional at work"
                width={600}
                height={600}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section id="nuestros-trabajos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Nuestros Trabajos
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Image
                src="/electricist.jpg"
                alt="Modern kitchen"
                width={400}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-1">
              <Image
                src="/electricist.jpg"
                alt="Living room"
                width={400}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-1">
              <Image
                src="/electricist.jpg"
                alt="Bedroom"
                width={400}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-1">
              <Image
                src="/electricist.jpg"
                alt="Bathroom"
                width={400}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-1">
              <Image
                src="/electricist.jpg"
                alt="Home office"
                width={400}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-1">
              <Image
                src="/electricist.jpg"
                alt="Home office"
                width={400}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <footer id="contacto" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Estamos para ayudarte
            </h2>
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto">
              ¿Tenés alguna consulta? Escribinos y te ayudamos a
              resolver lo que necesitás.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between mx-auto">
            <Card className="md:w-1/2 bg-transparent border-none shadow-none">
              <CardContent>
                <h3 className="text-2xl text-white font-semibold mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Teléfono</h4>
                        <p className="text-white">3517730127</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-white">info@homes.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          ¿De dónde somos?
                        </h4>
                        <p className="text-white">Córdoba, Argentina.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div>
                        <a
                          href="https://www.instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                        >
                          <Instagram className="h-6 w-6 text-white inline-block" />
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://wa.me/5493517730127"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                        >
                          <Image src={WhatsApp} alt="WhatsApp" className="h-6 w-6 text-white inline-block" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="md:w-[450px] bg-transparent border-none shadow-none">
              <CardContent>
                <h3 className="text-2xl mb-6 text-white font-semibold">
                  Horarios
                </h3>
                <div className="flex flex-col justify-between space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white">Lunes - Viernes</span>
                    <span className="font-medium text-white">
                      9:00 AM - 18:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Sábado</span>
                    <span className="font-medium text-white">
                      9:00 AM - 14:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Domingo</span>
                    <span className="font-medium text-white">
                      Solo emergencias
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </footer>
    </div>
  );
}
