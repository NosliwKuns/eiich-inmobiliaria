// @ts-check
import { defineConfig, envField } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

import alpinejs from "@astrojs/alpinejs"

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://eiichinmobiliaria.com",
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [alpinejs({ entrypoint: "/src/entrypoint" }), sitemap()],
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	env: {
		schema: {
			CLIENT_URL: envField.string({ context: "client", access: "public" }),
			WHATSAPP_NUMBER: envField.string({ context: "client", access: "public" }),
		},
	},
})