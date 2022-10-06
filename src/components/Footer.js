import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => (
  <footer>
    <div>
      &copy;COPYRIGHT 2022<span> | Created By</span>{" "}
      <a href="https://github.com/JasonLim1009/React-PokeDex-App">
        {" "}
        MR.Jason LIM
      </a>
    </div>
    <div className="footer__socials">
      <a href="https://github.com/JasonLim1009">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/jasonlim1009/">
        <FiInstagram />
      </a>
      <a href="https://www.youtube.com/channel/UCZtC8IaD62jcvVKB0SbkRIw/featured">
        <IoLogoYoutube />
      </a>
    </div>
  </footer>
);

export default Footer;
