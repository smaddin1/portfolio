import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com">
        <InstagramIcon />
        </a>
        
        
        <a href="https://github.com/smaddin1">
          <GitHub/>
        </a>
        <a href="https://www.linkedin.com/in/sivanag-maddineni/">
        <LinkedInIcon />
        </a>
        
        
      </div>
      {/* <p>sivanag.com</p> */}
      
    </div>
  );
}

export default Footer;
