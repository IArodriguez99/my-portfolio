import React, { useEffect } from "react";

export default function Nav() {

    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, []);

  return (
    <nav>
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
  );
}



