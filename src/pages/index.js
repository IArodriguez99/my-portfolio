import * as React from "react"
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme'
import Nav from "../components/Nav";

const IndexPage = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <h1>Hey there!</h1>
        <button onClick={toggleTheme}>
            {isDarkTheme ?
              <span aria-label="Light mode" role="img">🌞</span> :
              <span aria-label="Dark mode" role="img">🌜</span>}
        </button>
        <Nav />
      </>
   </ThemeProvider>
  )
} 

export default IndexPage
