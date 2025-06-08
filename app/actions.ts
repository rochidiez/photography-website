"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  const fullName = formData.get("fullName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!fullName || !email) {
    throw new Error("Por favor, complete todos los campos requeridos.")
  }

  // Email content
  const emailContent = {
    from: "Contact Form <onboarding@resend.dev>",
    to: "rochidiezux@gmail.com",
    subject: "Nueva Solicitud de Contacto - Agus Pecci Photography",
    html: `
      <h2>Nueva Solicitud de Contacto</h2>
      <p><strong>Nombre:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message || "No se proporcionó mensaje."}</p>
      <hr>
      <p><small>Enviado desde: aguspecci.com<br>Fecha: ${new Date().toLocaleString()}</small></p>
    `,
  }

  try {
    // Log the submission
    console.log("Intentando enviar formulario de contacto:", {
      fullName,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    })

    // Try to send email if API key is available
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailContent),
        })

        const data = await response.json()

        if (response.ok) {
          console.log("Email enviado con éxito vía Resend:", data)
        } else {
          console.error("Error al enviar email:", data)
          throw new Error("Error al enviar el email")
        }
      } catch (emailError) {
        console.error("Error en el servicio de email:", emailError)
        throw emailError
      }
    } else {
      console.error("No hay API key de Resend configurada")
      throw new Error("Servicio de email no configurado")
    }

    // If we get here, everything worked
    return { success: true }
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error)
    throw error
  }
}
