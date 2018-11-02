import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['700'],
    }
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
})

export default typography
