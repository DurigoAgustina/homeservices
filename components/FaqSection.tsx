"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FaqSection() {
  const faqs = [
    {
      question: "¿Con qué frecuencia debo inspeccionar mi plomería?",
      answer:
        "Se recomienda realizar una inspección de plomería al menos una vez al año para detectar problemas potenciales antes de que se conviertan en costosas reparaciones.",
    },
    {
      question: "¿Cómo elijo al contratista de albañilería adecuado?",
      answer:
        "Al elegir un contratista de albañilería, busca referencias, revisa sus credenciales y asegúrate de que tengan experiencia en el tipo de trabajo que necesitas.",
    },
    {
      question: "¿Cuáles son algunas señales de que el trabajo de albañilería necesita reparación?",
      answer:
        "Algunas señales incluyen grietas en las paredes, humedad o moho, y desalineación de ladrillos o bloques.",
    },
    {
      question: "¿Qué debo hacer si mi inodoro sigue funcionando?",
      answer:
        "Si tu inodoro sigue funcionando, puede ser un signo de un problema más grande. Revisa la válvula de flotación y el mecanismo de descarga. Si no puedes resolverlo, es mejor llamar a un profesional.",
    },
    {
      question: "¿Ofrecen opciones ecológicas o sostenibles para sus servicios?",
      answer:
        "Sí, ofrecemos opciones ecológicas y sostenibles para muchos de nuestros servicios. Pregunta a nuestro equipo sobre las soluciones disponibles.",
    },
  ]

  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Columna Izquierda con Imagen + CTA */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/electricista.jpg"
            alt="Technicians working"
            width={200}
            height={200}
            className="w-200 h-200 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">¿Necesitas saber más?</h3>
              <p className="text-sm text-gray-300">
                Si tienes alguna pregunta o necesitas más información sobre nuestros servicios, ¡estamos aquí para ayudarte!
              </p>
            </div>
            <Button className="bg-[#FFC527] text-black font-medium hover:bg-[#FFC527]">
              <a href="#contacto">Escribinos</a>
            </Button>
          </div>
        </div>

        {/* Columna Derecha con FAQ */}
        <div>
          <h3 className="uppercase text-sm tracking-widest mb-2">PREGUNTAS FRECUENTES</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Si tienes dudas, nosotros tenemos respuestas
          </h2>

          <Accordion type="single" collapsible className=" flex flex-col gap-4 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg data-[state=open]:text-black transition-colors"
              >
                <AccordionTrigger className="text-left px-4 rounded-none rounded-tl-lg rounded-tr-lg data-[state=open]:bg-[#FFC527] font-medium md:text-lg py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 px-2 py-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
