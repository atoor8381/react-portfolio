import React from "react";
import "./basicinformation.css";
import personal from "../../../assets/images/personal.jpg";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const BasicInformation = () => {
  return (
    <>
        <div className="basicinfo">
          <div className="picture">
            <img src={personal} alt="Profile" />
          </div>
          <div className="info">
          <div className="name-basic">
            <h2>
              Ali Hussnain.
            </h2>
            <p>
              Full Stack Developer.
            </p>
            <p>
              Bachelors Student.
            </p>
            <p>
              Based in Pakistan.
            </p>
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/hhttoooorr/" target="_blank"><FaInstagram size={24} /></a>
            <a href="https://github.com/atoor8381" target="_blank"><FaGithub size={24} /></a>
            <a href="https://x.com/atoor8381" target="_blank"><FaXTwitter size={24} /></a>
          </div>
        </div>       
        </div>
    </>
  );
}

export default BasicInformation;