import { vojo } from './../themes'

class ThemeStore {

  constructor(theme, font) {
    this.defaultTheme = vojo
    this.defaultFont = this.defaultTheme.GlobalFonts
    this.theme = theme ? theme : this.defaultTheme
    this.font = font ? font : this.defaultFont
  }

  configure = ({ theme, fonts }) =>  {
    if (theme) this.configureTheme(theme)
    else this.configureTheme(this.defaultTheme)

    if (fonts) this.configureTheme(fonts)
    else this.configureFont(this.defaultFont)

  }

  configureTheme = (theme) => {
    this.theme = theme
  }

  configureFont = (font) => {
    this.font = font
  }

  modify = (modifiedProps) => {
    const currentTheme = this.theme
    return { currentTheme, modifiedProps }
  }

  getTheme = () => this.theme

}

export default ThemeStore