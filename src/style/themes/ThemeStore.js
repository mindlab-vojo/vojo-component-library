import vojo from './themes/vojo'

class ThemeStore {

  constructor(theme) {
    this.defaultTheme = vojo
    this.theme = theme ? theme : this.defaultTheme
  }

  configure = ({ theme }) =>  {
    if (theme) this.configureDefaultTheme(theme)
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