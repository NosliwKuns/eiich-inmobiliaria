import { WHATSAPP_NUMBER } from "astro:env/client"

export function getWhatsappLink(
	message: string = "¡Hola! Estoy interesado en una propiedad.",
	propertyUrl?: string
): string {
	const encodedMessage = encodeURIComponent(message)

	// Ensure the WhatsApp number is in the correct format

	if (propertyUrl) {
		return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}%0A%0A${propertyUrl}`
	}

	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}
// 51992096134
