import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'CybSociety',
  title: 'CybSociety - IT Blog',
  description: 'A blog featuring articles on a variety of IT topics.',
  lang: 'en',
  themes: {
    dark: 'github-dark',
    light: 'github-light'
  }
} satisfies Config
