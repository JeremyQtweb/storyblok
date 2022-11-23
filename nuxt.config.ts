// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
    [
      '@storyblok/nuxt',
      {
				accessToken: '65plU31QfQa3ScTzCxMMcgtt',
				// If Server Location === US then:
				apiOptions: { region: 'us' }
			}
		],
		'@nuxtjs/tailwindcss'
  ],
})
