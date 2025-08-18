import { Card, CardContent } from "./ui/card"

export const FooterSection = () => {
  return (
      <footer id="contacto" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Estamos para ayudarte
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto">
              ¿Tenés alguna consulta? Escribinos y te ayudamos a resolver lo que
              necesitás.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between mx-auto">
            <Card className="md:w-1/2 bg-transparent border-none shadow-none">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FFC527] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="#222222"
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
                        <h4 className="font-semibold">Teléfono</h4>
                        <p className="">3517730127</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FFC527] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="#222222"
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
                        <h4 className="font-semibold">Email</h4>
                        <p>info@homes.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FFC527] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="#222222"
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
                        <h4 className="font-semibold">¿De dónde somos?</h4>
                        <p>Córdoba, Argentina.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="md:w-[450px] bg-transparent border-none shadow-none">
              <CardContent>
                <h3 className="text-2xl mb-6 font-semibold">Horarios</h3>
                <div className="flex flex-col justify-between space-y-2">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium">9:00 AM - 18:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="font-medium">9:00 AM - 14:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="font-medium">Solo emergencias</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </footer>
  )
}