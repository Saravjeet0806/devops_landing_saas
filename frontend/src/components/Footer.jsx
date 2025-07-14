import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 text-neutral-300">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/Saravjeet0806"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saravjeetsingh08/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
       
          <a
            href="https://www.instagram.com/saravjeet_rathore/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} AarogyaAi. Built  by
          <a
            href="https://github.com/Saravjeet0806"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 underline hover:text-white"
          >
            Saravjeet Singh
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
