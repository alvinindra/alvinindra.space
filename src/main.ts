import { ViteSSG } from 'vite-ssg'
import { RouterScrollBehavior } from 'vue-router'
import autoRoutes from 'pages-generated'
import App from './App.vue'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.css'
import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: any
  }
}

const routes = autoRoutes.map((i: any) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
})

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition)
    return savedPosition
  else
    return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  (ctx) => {
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
