"use client"

import type React from "react"

import { useState } from "react"
import { User, Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { PiTiktokLogo } from "react-icons/pi";

import { playfairDisplay } from "@/utils/typographies"

const Contact = () => {

  const socialMedia = [
    {
      icon: Instagram,
      link: "https://instagram.com/lallavedesol",
      name: "Instagram"
    },
    {
      icon: PiTiktokLogo,
      link: "https://www.tiktok.com/@lallavedesol",
      name: "Tiktok"
    },
  ]

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formState.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formState.phone.trim()) {
      newErrors.phone = "El teléfono es requerido"
    } else if (!/^[0-9\s+()-]+$/.test(formState.phone)) {
      newErrors.phone = "El teléfono no es válido"
    }

    if (!formState.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setFormStatus("submitting")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormStatus("success")

      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        setFormStatus("idle")
      }, 3000)
    } catch (error) {
      setFormStatus("error")
      setTimeout(() => setFormStatus("idle"), 3000)
    }
  }

  return (
    <section className="bg-[#FF972A] py-16 relative" id="contact">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className={`${playfairDisplay.className} text-3xl md:text-5xl font-bold text-white text-center`}>
            CONTACTO
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full mb-6 mt-3" />
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            Estamos aquí para ayudarte en tu camino de sanación y crecimiento personal. ¿Tienes alguna pregunta?
            Escríbenos.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-orange-400 to-orange-600 p-0 py-8 px-5 md:p-8 text-white ">
              <h3 className={`${playfairDisplay.className} text-xl font-bold mb-6`}>Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email</p>
                    <p className="font-medium">experienciaslallavedesol@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Teléfono</p>
                    <p className="font-medium">+54 9 11 2406-3003</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Horario de atención</p>
                    <p className="font-medium">Lun-Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm opacity-80 mb-4">Síguenos en redes sociales</p>
                <div className="flex gap-4">
                  {socialMedia.map((social) => (
                    <a
                      key={social.name.toLowerCase()}
                      className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                      href={social.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="sr-only">{social.name}</span>
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>


            <div className="md:col-span-3 col-span-1 p-0 py-8 px-5 md:p-8 mr-2 md:mr-0">
              <h3 className={`${playfairDisplay.className} text-xl font-bold text-gray-800 mb-6`}>
                Envíanos un mensaje
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <div className="relative">
                    <input
                      className={`w-full bg-orange-50 border ${errors.name ? "border-red-400" : "border-orange-200"} rounded-lg pl-10 py-3 pr-4 placeholder:text-orange-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all`}
                      id="name"
                      name="name"
                      placeholder="Nombre"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-5 w-5" />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm ml-2">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <input
                      className={`w-full bg-orange-50 border ${errors.email ? "border-red-400" : "border-orange-200"} rounded-lg pl-10 py-3 pr-4 placeholder:text-orange-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all`}
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-5 w-5" />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm ml-2">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <input
                      className={`w-full bg-orange-50 border ${errors.phone ? "border-red-400" : "border-orange-200"} rounded-lg pl-10 py-3 pr-4 placeholder:text-orange-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all`}
                      id="phone"
                      name="phone"
                      placeholder="Teléfono"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-5 w-5" />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm ml-2">{errors.phone}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <textarea
                      className={`w-full bg-orange-50 border ${errors.message ? "border-red-400" : "border-orange-200"} rounded-lg pl-10 py-3 pr-4 placeholder:text-orange-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all min-h-[120px] resize-y`}
                      id="message"
                      name="message"
                      placeholder="Mensaje"
                      value={formState.message}
                      onChange={handleChange}
                    />
                    <MessageSquare className="absolute left-3 top-3 text-orange-400 h-5 w-5" />
                  </div>
                  {errors.message && <p className="text-red-500 text-sm ml-2">{errors.message}</p>}
                </div>

                <button
                  className={`
                                        w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium
                                        transition-all duration-300 relative overflow-hidden
                                        ${formStatus === "submitting"
                      ? "bg-orange-400 cursor-wait"
                      : formStatus === "success"
                        ? "bg-green-500"
                        : formStatus === "error"
                          ? "bg-red-500"
                          : "bg-orange-500 hover:bg-orange-600 hover:shadow-lg"
                    }
                                    `}
                  disabled={formStatus === "submitting"}
                  type="submit"
                >
                  {formStatus === "submitting" && (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                      />
                    </svg>
                  )}

                  {formStatus === "success" ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Mensaje enviado</span>
                    </>
                  ) : formStatus === "error" ? (
                    <>
                      <AlertCircle className="h-5 w-5" />
                      <span>Error al enviar</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

