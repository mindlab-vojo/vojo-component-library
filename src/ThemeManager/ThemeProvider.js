import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'

import ThemeStore from './ThemeStore';

// Provider and Consumer instances
const { Provider, Consumer } = createContext();

class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.string
  }

  state = {
    themeConfig: new ThemeStore()
  }

  componentDidMount() {
    if (this.props.theme) this.setTheme()
  }

  componentDidUpdate(prevProps) {
    if (this.props.theme !== prevProps.theme) this.setTheme()
  }

  setTheme = () => {
    const { theme } = this.props
    const { themeConfig } = this.state
    const updatedTheme = themeConfig.configure({ theme })
    this.setState({ theme: updatedTheme })
  }

  render() {
    return (
      <Provider value={{ theme: this.state.themeConfig.theme }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { ThemeProvider }

export default Consumer