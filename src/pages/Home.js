import React, { useEffect, useState }from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {

  const languages = ["Hello", "Namaste","Bonjour", "Hola", "Hallo", "Ciao"]; // Add more languages as needed
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);


  useEffect(() => {
    // Create a timer to change the displayed language every 2 seconds (2000 milliseconds)
    const timer = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) =>
        (prevIndex + 1) % languages.length
      );
    }, 4000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div className="home">
      <div className="left-section">
        <div className="image-container">
          <div className="circle-image">
          <img src="/img1.jpg" alt="profile image" />
          </div>
          
          {/* Add more images or components for the left section */}
        </div>
      </div>
      <div className="right-section">
        <div className="about">
          <h1 >{languages[currentLanguageIndex]}</h1>
          <h2>I am Siva</h2>
          <div className="prompt">
            <p>A software developer with a passion for learning and creating.Wanna know more about me? explore the below circles.</p>
            <div className="link-circle">
              <div className="circle-Resume">
                <Link to="/Resume">
                  <span class="text">Resume</span>
                </Link>
              </div>
              
              <div className="circle-Projects">
                <Link to="/Projects">
                  <span class="text">Projects</span>
                </Link>  
              </div>
              <div className="circle-Contact">
                <Link to="/Contact">
                  <span class="text">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          {/* Add content for the right section as needed */}
        </div>
      </div>
    </div>
      
  );
}

export default Home;
