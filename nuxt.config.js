export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: "universal",
    // router配置
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: "/foo",
                component: resolve(__dirname, "pages/othername.vue")
            });
        }
        // middleware: ["auth"]
    },
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: "server",
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "blue" },

    /*
     ** Global CSS
     */
    css: ["element-ui/lib/theme-chalk/index.css"],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        "@/plugins/element-ui",
        "@/plugins/api-inject",
        "@/plugins/interceptor"
    ],
    // plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
        "cookie-universal-nuxt"
    ],
    axios: {
        proxy: true
    },
    proxy: {
        "/api": "http://localhost:8080"
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        transpile: [/^element-ui/]
    }
};