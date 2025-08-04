import Image from "next/image"
import { Paintbrush, Zap, Shield, Wrench } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Paintbrush,
      title: "Painting Services",
      description:
        "Transform your space with our professional painting services. We offer both interior and exterior painting using high-quality paints and materials. Our experienced painters ensure smooth, even coverage and clean, precise lines. Whether you're looking to refresh a single room or paint your entire home, we deliver exceptional results that last.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Zap,
      title: "Electrical Work",
      description:
        "Our licensed electricians provide safe and reliable electrical services for your home. From installing new outlets and light fixtures to complete electrical panel upgrades, we handle all your electrical needs. We ensure all work meets local codes and safety standards, giving you peace of mind and reliable power throughout your home.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Shield,
      title: "Security Camera Installation",
      description:
        "Protect your home and family with our comprehensive security camera systems. We design and install custom surveillance solutions tailored to your property's unique layout. Our systems include high-definition cameras, remote monitoring capabilities, and professional installation to ensure optimal coverage and performance.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Wrench,
      title: "Plumbing Services",
      description:
        "From leaky faucets to complete bathroom renovations, our skilled plumbers handle all your plumbing needs. We provide emergency repairs, routine maintenance, and new installations. Our team uses modern tools and techniques to diagnose problems quickly and provide lasting solutions that keep your water flowing smoothly.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive home services with professional expertise and attention to detail. Each service is
            delivered by licensed professionals committed to quality and customer satisfaction.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <service.icon className="h-12 w-12 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
