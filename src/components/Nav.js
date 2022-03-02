import React, { useEffect } from "react";
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../pages/styles/theme'

export default function Nav() {

const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <nav>
        <GlobalStyles />
          <button onClick={toggleTheme}>
              {isDarkTheme ?
                <span aria-label="Light mode" role="img">🌞</span> :
                <span aria-label="Dark mode" role="img">🌜</span>}
          </button>
          <a
          href="/"
          onClick={e => {
            let about = document.getElementById("about");
            e.preventDefault();
            about && about.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState("about", "about", "/about");
          }}
        >
          About Me
        </a>
        <a
          href="/"
          onClick={e => {
            let projects = document.getElementById("projects");
            e.preventDefault();
            projects && projects.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState("projects", "projects", "/projects");
          }}
        >
          Projects
        </a>
        <a
          href="/"
          onClick={e => {
            let contact = document.getElementById("contact");
            e.preventDefault();
            contact &&
              contact.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState("contact", "contact", "/contact");
          }}
        >
          Contact
        </a>
      </nav>
    </ThemeProvider>
  );
}



