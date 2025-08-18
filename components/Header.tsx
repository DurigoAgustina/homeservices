import Image from "next/image";
import { Button } from "./ui/button";
const Header = () => {
  return (
     <nav className="bg-transparent">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            <div>
              <Image src="/thales-multiservicios.png" alt="Logo" width={140} height={140} />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium hover:text-[#FFC527]">
                Inicio
              </a>
              <a href="#servicios" className="hover:text-[#FFC527]">
                Servicios
              </a>
              {/* <a href="#nuestros-trabajos">
                Nuestro Trabajo
              </a> */}
              <a href="/contact" className="hover:text-[#FFC527]">
                Contacto
              </a>
            </div>

            <Button
              className="bg-[#ffc527] hover:bg-[#222222] text-black rounded-full py-6 px-6 cursor-pointer"
            >
              <a href="https://wa.me/5493517730127" target="_blank" rel="noopener noreferrer">
                Contactanos
              </a>
            </Button>
          </div>
        </div>
      </nav>
  )
}
export default Header