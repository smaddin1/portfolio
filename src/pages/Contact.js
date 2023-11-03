import React, { useEffect, useState } from 'react'
import "../styles/Contact.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Github from "@material-ui/icons/GitHub";


function Contact() {
  return (
    <div className="contact-container">
        <div className='Contact-left'>
            <h1>Contact</h1>
            <p>Looking forward to hearing from you</p>
            
            <div className="contact-info">
                <div>
                <h3>Phone</h3>
                <p>+1 5714367160</p>
                </div>
                <div>
                <h3>Email</h3>
                <p>smaddin1@umbc.edu</p>
                </div>
            </div>

        </div>
        <div className='Contact-right'>
            <div>
                <h1>Let's work together</h1>
                <div class="linkedin-container">
                <a href="https://www.linkedin.com/in/sivanag-maddineni/">
        <LinkedInIcon />
        </a>
                
                <p>Lets talk professionally here </p>
                </div>
                <div class="linkedin-container">
                    <a href="https://mail.google.com/mail/">
                    <EmailIcon />
                    </a>
                
                <p>You send documents or required files here</p>
                </div>
                <div class="linkedin-container">
                <a href="https://github.com/smaddin1">
          <Github/>
        </a>
                <p>see my work here</p>
                </div>
                
            
            

            </div>
            

            
            {/* <form className="contact-form">
                <div className='full-name'>
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className='Matter'>
                    <input type="email" placeholder="Email *" required />
                    <input  type="text" placeholder="Subject" />

                </div>
            
                <div className='button'>
                    <textarea className="Subject" placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                    
                </div>
            
            </form>
             */}


        </div>

        
        
      
    </div>
  )
}

export default Contact
