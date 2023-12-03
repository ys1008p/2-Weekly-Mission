import React from "react";

const Link = ({ href, text }) => (
  <a className="footer-link" href={href}>
    {text}
  </a>
);

export default Link;
