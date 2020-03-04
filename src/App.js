import React from 'react';
import logo from './logo.svg';
import { createGlobalStyle } from 'styled-components';


const StyledApp = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .App {
    text-align: center;
  }

  .App__logo {
    height: 40vmin;
    pointer-events: none;
  }

  .App__header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App__subtitle {
    font-size: 20px;
  }

  .App__subtitle code {
    color: red;
  }
`

function App() {
  return (
    <>
      <StyledApp/>
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <p className="App__title">
            Welcome to Vojo&apos;s Component Library
          </p>
          <p className="App__subtitle">
            To test components run: <code>yarn storybook</code>
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
