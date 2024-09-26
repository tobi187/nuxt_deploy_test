// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    imports: {
        dirs: ['app/types/*.d.ts'],
    },
    modules: ['@nuxtjs/tailwindcss', '@kgierke/nuxt-basic-auth'],
    basicAuth: {
        enabled: process.env.NODE_ENV !== 'development',
        users: process.env.USER_LIST,
        usersDelimiter: ';',
    },
})
