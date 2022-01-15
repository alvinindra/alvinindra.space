import LogosVue from '~icons/logos/vue'
import LogosLaravel from '~icons/logos/laravel'
import LogosBootstrap from '~icons/logos/bootstrap'
import LogosNuxt from '~icons/logos/nuxt-icon'
import LogosElement from '~icons/logos/element'
import LogosJavascript from '~icons/logos/javascript'
import LogosHtml from '~icons/logos/html-5'
import LogosCss from '~icons/logos/css-3'
import LogosSass from '~icons/logos/sass'
import LogosTypescript from '~icons/logos/typescript-icon'
import LogosPwa from '~icons/logos/pwa'

import coverParentinghub from '~/assets/images/projects/parentinghub.png'
import coverPaninti from '~/assets/images/projects/paninti.png'
import coverPanintiPartner from '~/assets/images/projects/panintipartner.png'

export function useProjects() {
  const listProjects = shallowRef([
    {
      id: 1,
      name: 'Parenting Hub',
      url: 'https://parentinghub.co.id',
      description: 'An educational media site and information about reviews, the growth and development of children and parenting.',
      cover: coverParentinghub,
      techstack: [
        {
          id: 1,
          name: 'Vuejs',
          icon: LogosVue,
        },
        {
          id: 2,
          name: 'Laravel',
          icon: LogosLaravel,
        },
        {
          id: 3,
          name: 'Bootstrap 4',
          icon: LogosBootstrap,
        },
        {
          id: 4,
          name: 'Element UI',
          icon: LogosElement,
        },
      ],
    },
    {
      id: 2,
      name: 'Paninti Store',
      url: 'https://paninti.com',
      description: 'E-commerce for the most complete needs of mothers and babies.',
      cover: coverPaninti,
      techstack: [
        {
          id: 1,
          name: 'Vuejs',
          icon: LogosVue,
        },
        {
          id: 2,
          name: 'Nuxt',
          icon: LogosNuxt,
        },
        {
          id: 3,
          name: 'Element UI',
          icon: LogosElement,
        },
        {
          id: 4,
          name: 'Bootstrap 4',
          icon: LogosBootstrap,
        },
      ],
    },
    {
      id: 3,
      name: 'Paninti Partner',
      url: 'https://partner.paninti.com',
      description: 'A place for mutual cooperation to face the challenges of an increasingly dynamic economic condition',
      cover: coverPanintiPartner,
      techstack: [
        {
          id: 1,
          name: 'Vuejs',
          icon: LogosVue,
        },
        {
          id: 2,
          name: 'Nuxt',
          icon: LogosNuxt,
        },
        {
          id: 3,
          name: 'Element UI',
          icon: LogosElement,
        },
        {
          id: 4,
          name: 'Bootstrap 4',
          icon: LogosBootstrap,
        },
      ],
    },
  ])

  const listSkills = shallowRef([
    {
      id: 1,
      title: 'Vue JS',
      skill: 'Expert',
      icon: LogosVue,
    },
    {
      id: 2,
      title: 'JavaScript',
      skill: 'Expert',
      icon: LogosJavascript,
    },
    {
      id: 3,
      title: 'TypeScript',
      skill: 'Advanced',
      icon: LogosTypescript,
    },
    {
      id: 4,
      title: 'HTML',
      skill: 'Expert',
      icon: LogosHtml,
    },
    {
      id: 5,
      title: 'CSS',
      skill: 'Expert',
      icon: LogosCss,
    },
    {
      id: 6,
      title: 'SASS/SCSS',
      skill: 'Advanced',
      icon: LogosSass,
    },
    {
      id: 7,
      title: 'Progressive Web Apps (PWA)',
      skill: 'Advanced',
      icon: LogosPwa,
    },
    {
      id: 8,
      title: 'Nuxt',
      skill: 'Expert',
      icon: LogosNuxt,
    },
  ])

  return {
    listProjects,
    listSkills,
  }
}
