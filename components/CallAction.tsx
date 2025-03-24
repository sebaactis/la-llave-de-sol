"use client"

import { useState, useEffect, useRef } from "react"
import { FaWhatsapp, FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa"

import { montserrat, playfairDisplay } from "@/utils/typographies"


const CallAction = () => {
  const phoneNumber = "+5491124063003"
  const message = encodeURIComponent("Hola quiero reservar mi lugar en la llave de sol!")
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true)
            if (videoRef.current) {
              videoRef.current.play()
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <section
      className="py-5 pb-20 overflow-hidden relative bg-[#fcebe1]"
      id="call-to-action"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-16 flex flex-col justify-center items-center gap-3 text-center">
          <h2 className={`${playfairDisplay.className} text-3xl md:text-4xl font-bold text-[#ffaa50]
           text-center md:text-start`}>¡VOS TAMBIÉN PODÉS SER PARTE DEL CAMBIO!</h2>
          <div className="h-1 w-20 bg-[#ffaa50] mx-auto rounded-full mb-6" />
          <p className={` ${montserrat.className} text-xl text-black/70 max-w-3xl italic`}>
            Únete a nuestra experiencia transformadora y descubre cómo puedes marcar la diferencia en tu vida y en la de
            los demás.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div
            className={`flex justify-center transition-all duration-1000 transform md:${isVideoVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <video
                ref={videoRef}
                controls
                loop
                muted
                className="w-full h-auto max-h-[500px] object-cover"
                poster="/placeholder.svg?height=500&width=400"
              >
                <source
                  src="https://storage.googleapis.com/msgsndr/XbIroeCo43YzroXkLcgO/media/67289aa684cd8364415c81f7.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform md:${isVideoVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl shadow-xl overflow-hidden">
              <div className="relative">
                <div className="relative p-8 md:p-10">
                  <h3 className={`${playfairDisplay.className} text-2xl md:text-3xl font-bold text-white mb-6`}>
                    Próxima Experiencia
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <FaCalendarAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Fecha</p>
                        <p className="text-white text-lg font-semibold">DD/MM/YYYY</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <FaClock className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Horario</p>
                        <p className="text-white text-lg font-semibold">XX.XX Hs</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <FaMapMarkerAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Lugar</p>
                        <p className="text-white text-lg font-semibold">Calle 123 - Buenos Aires</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      className="flex items-center justify-center gap-3 bg-green-500 px-6 py-4 rounded-xl text-white font-bold transition-all duration-300 hover:bg-green-600 hover:scale-105 shadow-lg hover:shadow-xl w-full text-center"
                      href={`https://wa.me/${phoneNumber}?text=${message}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaWhatsapp size={24} />
                      <span>Reservá tu lugar ahora</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CallAction

