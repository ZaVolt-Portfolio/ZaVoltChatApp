import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import 'virtual:windi.css'

const routes = setupLayouts(generatedRoutes)

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  () => {
    // install plugins etc.
  }
)
