import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/kunal-b-42722510b/" target="_blank">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/Kbamborde" target="_blank">
        <div>
          <FaGithub />
        </div>
      </a>
      <div>
        <BsTwitter />
      </div>
    </div>
  );
};

export default SocialMedia;
