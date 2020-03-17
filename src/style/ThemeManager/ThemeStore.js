import { vojo } from './../themes'

class ThemeStore {

  constructor(theme) {
    this.defaultTheme = vojo
    this.theme = theme ? theme : this.defaultTheme
  }

  configure = ({ theme }) =>  {
    if (theme) this.configureTheme(theme)
    else this.configureTheme(this.defaultTheme)
  }

  configureTheme = (theme) => {
    this.theme = theme
  }

  modify = (modifiedProps) => {
    const currentTheme = this.theme
    return { currentTheme, modifiedProps }
  }

  getTheme = () => this.theme

}

export default ThemeStore