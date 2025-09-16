import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full z-50">
      <nav className="bg-[#222222]">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/thales-multiservicios.png"
                alt="Logo"
                width={140}
                height={140}
              />
            </Link>

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
              <a href="#contacto" className="hover:text-[#FFC527]">
                Contacto
              </a>
            </div>

            <Button className="bg-[#ffc527] hidden md:flex hover:bg-[#222222] text-black rounded-full py-6 px-6 cursor-pointer">
              <a
                href="https://wa.me/5493517730127"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactanos
              </a>
            </Button>
            <div className="flex md:hidden">
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <div>
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"
                        />
                      </svg>

                      <div className={`absolute top-20 left-0 w-full bg-[#222222] text-white flex flex-col items-center space-y-6 py-6 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                        <a href="#" className="font-medium hover:text-[#FFC527]">
                          Inicio
                        </a>
                        <a href="#servicios" className="hover:text-[#FFC527]">
                          Servicios
                        </a>
                        {/* <a href="#nuestros-trabajos">
                          Nuestro Trabajo
                        </a> */}
                      <a href="#contacto" className="hover:text-[#FFC527]">
                        Contacto
                      </a>
                      </div>
                    </div>
                  ) : (
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
