// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  // When you configure colorMode to not have the suffix, note how shiki through nuxt/content starts
	// working as expected again 
  // colorMode: { classSuffix: "" }
});
