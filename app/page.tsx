"use client"

import { Camera, Phone, MapPin, Instagram, CheckCircle, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "./actions"
import { Lightbox } from "@/components/ui/lightbox"

function SuccessMessage() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  if (success === "true") {
    return (
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <p className="text-green-800">
          ¡Gracias! Tu mensaje ha sido enviado con éxito. Te responderé en un plazo de 24 horas.
        </p>
      </div>
    );
  }
  return null;
}

export default function AgusPecciPhotography({
  searchParams,
}: {
  searchParams: { success?: string }
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const router = useRouter()

  const portfolioImages = [
    {
      id: 1,
      src: "/images/athlete-track-sitting.jpg",
      alt: "Professional sports photography Barcelona - Female athlete stretching on blue track with palm trees, athletic training session photography",
    },
    {
      id: 2,
      src: "/images/athlete-track-starting.jpg",
      alt: "Sports photographer Barcelona - Athletic starting position photography, professional competition photography Spain",
    },
    {
      id: 3,
      src: "/images/athlete-track-running.jpg",
      alt: "Barcelona sports photography - Dynamic running photography, professional athletic motion capture, training session photography",
    },
    {
      id: 4,
      src: "/images/athlete-gym-pose.jpg",
      alt: "Fitness photography Barcelona - Professional gym portrait photography, athletic lifestyle photography Spain",
    },
    {
      id: 5,
      src: "/images/athlete-gym-deadlift.jpg",
      alt: "Professional gym photography Barcelona - Strength training photography, athletic performance photography Spain",
    },
    {
      id: 6,
      src: "/images/athlete-gym-stretch.jpg",
      alt: "Athletic photography Barcelona - Professional fitness photography, gym training session photography Spain",
    },
    {
      id: 7,
      src: "/images/male-athlete-squat.jpg",
      alt: "CrossFit photography Barcelona - Professional weightlifting photography, athletic strength training photography Spain",
    },
    {
      id: 8,
      src: "/images/male-athlete-front-squat.jpg",
      alt: "Professional sports photography Barcelona - Male athlete barbell training, gym photography Spain",
    },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    setLightboxOpen(true)
  }

  const handleSubmit = async (formData: FormData) => {
    try {
      await submitContactForm(formData)
      // After successful submission, update URL without reload
      router.push('/?success=true', { scroll: false })
      // Scroll to contact section
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-extralight tracking-widest uppercase">AGUS PECCI PHOTOGRAPHY</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => handleNavClick("#home")}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavClick("#portfolio")}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => handleNavClick("#home")}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => handleNavClick("#portfolio")}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Contacto
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-[#ffffeb]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Cada atleta tiene una historia
                  <span className="block text-gray-600">— Yo capturo la tuya</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Fotógrafo deportivo profesional en Barcelona dedicado a resaltar tu pasión, determinación y
                  crecimiento. Desde sesiones de entrenamiento diarias hasta victorias definitorias, creo
                  recuerdos visuales que inspiran y perduran.
                </p>
              </div>
              <div className="flex flex-col space-y-2 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Disponible para reservas en Barcelona y Cataluña</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-transparent"></div>
                  <span>Ubicado en Barcelona, España</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/Running-studio.jpg"
                  alt="Professional sports photography Barcelona - Featured athletic photography work by Agus Pecci"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Atletas Capturados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Portfolio
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Fotografía deportiva profesional de sesiones de entrenamiento, competiciones y clases de Crossfit / Hyrox en Barcelona.
            </p>
          </div>

          {/* Consistent Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {portfolioImages.map((image, index) => (
              <Card
                key={image.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading={index < 4 ? "eager" : "lazy"}
                      quality={95}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <>
          <Lightbox
            images={portfolioImages}
            initialIndex={selectedImageIndex}
            onClose={() => setLightboxOpen(false)}
          />
          {/* Contact Button - Only visible when lightbox is open */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100]">
            <button
              onClick={() => window.open('https://wa.me/34624629701?text=Hola! Me interesa una sesion de fotos.', '_blank')}
              className="bg-[#f3ffe3] text-black px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold tracking-wider uppercase"
            >
              Contactar
            </button>
          </div>
        </>
      )}

      {/* Services Section - Pricing Style Cards */}
      <section className="py-20 bg-[#f0d7ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Servicios de Fotografía en Barcelona</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Servicios profesionales de fotografía y Reels deportivos en Barcelona y Cataluña por menos de lo que crees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Training Session Photography */}
            <div
              onClick={() =>
                window.open(
                  `https://wa.me/34624629701?text=Hola! Me interesa la sesion de fotos Training Session Photography`,
                  "_blank",
                )
              }
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sesión de Entrenamiento</h3>
                  <p className="text-gray-600 text-sm">Para atletas individuales</p>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Fotos y videos de acción de alta calidad</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Locación, o puede ser en tu box</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Entrega de galería digital</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Entrega rápida</span>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-[#e0c3f2]">
                  <div className="text-2xl font-bold text-gray-900 mb-1">Contactar</div>
                  <div className="text-sm text-gray-500">para precios</div>
                </div>
              </div>
            </div>

            {/* Competition Photography */}
            <div
              onClick={() =>
                window.open(
                  `https://wa.me/34624629701?text=Hola! Me interesa la sesion de fotos Competition Photography`,
                  "_blank",
                )
              }
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fotografía de Competición</h3>
                  <p className="text-gray-600 text-sm">Para eventos deportivos</p>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Cobertura del evento</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Múltiples ángulos y perspectivas</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Entrega rápida</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Fotos de equipo e individuales</span>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-[#e0c3f2]">
                  <div className="text-2xl font-bold text-gray-900 mb-1">Contactar</div>
                  <div className="text-sm text-gray-500">para precios</div>
                </div>
              </div>
            </div>

            {/* Athletic Portraits */}
            <div
              onClick={() =>
                window.open(
                  `https://wa.me/34624629701?text=Hola! Me interesala sesion de fotos`,
                  "_blank",
                )
              }
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contenido para boxes</h3>
                  <p className="text-gray-600 text-sm">Para clases, tutoriales y otros</p>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Fotos y videos de alumnos en clase</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Videos demostrativos de coches</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Entrega rápida</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Entrega de galería digital</span>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-[#e0c3f2]">
                  <div className="text-2xl font-bold text-gray-900 mb-1">Contactar</div>
                  <div className="text-sm text-gray-500">para precios</div>
                </div>
              </div>
            </div>

            {/* Team Photography */}
            <div
              onClick={() =>
                window.open(
                  `https://wa.me/34624629701?text=Hola! Me interesa la sesion de fotos Team Photography`,
                  "_blank",
                )
              }
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fotografía de Equipo</h3>
                  <p className="text-gray-600 text-sm">Para equipos deportivos</p>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Fotos grupales e individuales</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Fotos de acción y posadas</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Entrega rápida</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#e0c3f2] mr-2 flex-shrink-0" />
                    <span>Reels y fotos de workouts en equipo</span>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-[#e0c3f2]">
                  <div className="text-2xl font-bold text-gray-900 mb-1">Contactar</div>
                  <div className="text-sm text-gray-500">para precios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Reserva tu sesión de fotografía deportiva en Barcelona
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Hablemos de tus necesidades de fotografía deportiva y
              creemos algo inspirador juntos en Barcelona.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <Card className="p-6 sm:p-8 shadow-lg">
              <Suspense fallback={null}>
                <SuccessMessage />
              </Suspense>
              <form action={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nombre y Apellido *</Label>
                    <Input id="fullName" name="fullName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Número de Teléfono</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gray-900 hover:bg-gray-800">
                  Enviar Mensaje y Reservar Sesión
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-5 w-5 text-gray-600" />
                    <a 
                      href="https://instagram.com/aguspec.photo" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      @aguspec.photo
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">+34 624 629 701</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">Barcelona, España</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Áreas de Servicio</h4>
                <p className="text-gray-600 mb-4">
                  Servicios profesionales de fotografía deportiva disponibles en toda Barcelona, Cataluña y áreas
                  circundantes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Centro de Barcelona</li>
                  <li>• Puerto Olímpico y Playas</li>
                  <li>• Instalaciones Deportivas de Montjuïc</li>
                  <li>• Gimnasios y Centros de Entrenamiento Locales</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Tiempo de Respuesta</h4>
                <p className="text-gray-600 mb-4">
                  Respuesta en menos de 24 horas.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Normalmente responde en pocas horas</span>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lg font-extralight tracking-widest uppercase">AGUS PECCI PHOTOGRAPHY</span>
              </div>
              <p className="text-gray-400">
                Fotógrafo deportivo profesional en Barcelona capturando historias atléticas con pasión y
                dedicación.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Servicios de Fotografía Barcelona</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Fotografía de Sesiones de Entrenamiento</li>
                <li>Fotografía de Competición</li>
                <li>Retratos Atléticos</li>
                <li>Fotografía de Equipo</li>
                <li>Fotografía Fitness</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => handleNavClick("#portfolio")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Portfolio de Fotografía Deportiva
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Reservar Sesión de Fotografía
                  </button>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Precios de Fotografía
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog de Fotografía
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">
              &copy; 2024 Agus Pecci Photography - Fotógrafo Deportivo Profesional en Barcelona, España. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
