import React from "react";
import "./stack.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";

import {
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiCplusplus,
  SiPython
} from "react-icons/si"


const Stack = () => {
  return (
    <>
        <div className="stackcontainer">
          <div className="heading">
            <h3>Technologies I Use</h3>
          </div>
        <div className="stackiuse">
          <div className="stack-item">
            <FaHtml5 className="stack-icon" />
            <p>HTML5</p>
          </div>
          <div className="stack-item">
            <FaCss3Alt className="stack-icon" />
            <p>CSS3</p>
          </div>
          <div className="stack-item">
            <FaJs className="stack-icon" />
            <p>JavaScript</p>
          </div>
          <div className="stack-item">
            <FaReact className="stack-icon" />
            <p>React</p>
          </div>
          <div className="stack-item">
            <FaNodeJs className="stack-icon" />
            <p>Node.js</p>
          </div>
          <div className="stack-item">
            <SiMongodb className="stack-icon" />
            <p>MongoDB</p>
          </div>
          <div className="stack-item">
            <FaGitAlt className="stack-icon" />
            <p>Git</p>
          </div>
          <div className="stack-item">
            <SiCplusplus className="stack-icon" />
            <p>C++</p>
          </div>
          <div className="stack-item">
            <SiNextdotjs className="stack-icon" />
            <p>Next.js</p>
          </div>
          <div className="stack-item">
            <SiExpress className="stack-icon" />
            <p>Express</p>
          </div>
          <div className="stack-item">
            <SiTailwindcss className="stack-icon" />
            <p>Tailwind</p>
          </div>
          <div className="stack-item">
            <SiPython className="stack-icon" />
            <p>Python</p>
          </div>
        </div>
</div>
    </>
)}

export default Stack;