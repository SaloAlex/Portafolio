import React from "react";
import { FaHtml5, FaCss3Alt, FaGithub, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import {SiAdobephotoshop, SiAdobeaftereffects, SiSass, SiCanva, SiWordpress} from "react-icons/si";
import {DiJavascript1} from "react-icons/di"

const Skills = () => {
  return (
    <>
    
    <div className="leng-icon">
  <FaHtml5 />
  <span>HTML5</span>
</div>
<div className="leng-icon">
  <FaCss3Alt />
  <span>CSS3</span>
</div>
<div className="leng-icon">
  <FaBootstrap />
  <span>B-strap</span>
</div>
<div className="leng-icon">
  <FaGithub />
  <span>GitHub</span>
</div>
<div className="leng-icon">
  <DiJavascript1 />
  <span>J-Script</span>
</div>
<div className="leng-icon">
  <FaReact />
  <span>React</span>
</div>
<div className="leng-icon">
  <SiSass />
  <span>Sass</span>
</div>
<div className="leng-icon">
  <FaNodeJs />
  <span>Node.js</span>
</div>
<div className="leng-icon">
  <SiAdobephotoshop />
  <span> P-shop</span>
</div>
<div className="leng-icon">
  <SiAdobeaftereffects />
  <span> A-Effec</span>
</div>
<div className="leng-icon">
  <SiCanva />
  <span>Canva</span>
</div>
<div className="leng-icon">
  <SiWordpress />
  <span>Wordpress</span>
</div>

    </>
  );
};

export default Skills;
