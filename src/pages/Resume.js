import React from "react";

import "../styles/Resume.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div class="resume">
        <h1>Resume</h1>
        <div className="job work-experience">
            <h2 className="Work-Experience">Work Experience</h2>
        </div>
        
        <div className="Work-Experienced-description">
        <div class="job">
            <div class="job-header">
                <div class="job-date">2023 - Present</div>
                <h3 class="job-title">Graduate Assistant,UMBC</h3>
            </div>
            <div class="job-description">
            Graduate Assistant under Professor Marc Orlano for the course Graphics for Games. working on UNITY, C++ 
            </div>
        </div>
        <div class="job">
            <div class="job-header">
                <div class="job-date">2023 - 2023</div>
                <h3 class="job-title">SIGT  LLC, Summer Intern, USA</h3>
            </div>
            <div class="job-description">
            Assist in prototyping catheters and develop the software code for clinical guidance user interface for the cardiac ablation lesion assessment and evaluate its performance. Use of Algorithms for the preprocessing of the signals.
The signals acquired from the sensors are processed and used for the ML model to get the classification.
Using these developing a user interface to read the signals and their meaning to know the condition of the patient 

            </div>
        </div>
        <div class="job">
            <div class="job-header">
                <div class="job-date">2022 - 2022</div>
                <h3 class="job-title">Fastenal, Intern, India</h3>
            </div>
            <div class="job-description">
            Formulated in automating the process of developing and deploying 2 websites on Linux based OS. Maintained network persistence services for the system, increasing efficiency for the user experience.
Designed customized scripts and deployed code using Jenkins for automating processes for full and incremental backups collaborating with another team.
Guided on creating a SDLC pipeline called Novapoint using Jenkins, ansible and Docker with 96% test pass rates.
Modified 6-7 server environments for the company's e-commerce websites using puppet.


            </div>
        </div>
            
        </div>
        
    

        <hr class="separator"></hr>

        <div className="job education">
            <h2 className="Education">Education</h2>
        </div>
        

        <div class="job">
            <div class="job-header">
                <div class="job-date">2022-2024</div>
                <h3 class="job-title">University of Maryland, Baltimore County,                                                                      
Master of Science, Computer Science     
</h3>
            </div>
            <div class="job-description">
            Relevant Coursework: Design and Analysis of Algorithms, Topics in Machine Learning, Coding Theory and Analysis, Advance Computer Architecture, Quantum Computation, Data Science.

            </div>
        </div>

        <div class="job">
            <div class="job-header">
                <div class="job-date">2018 - 2022</div>
                <h3 class="job-title">National Institute of Technology Jamshedpur, India. 
Bachelor of technology in Electronics and Communication     
</h3>
            </div>
            <div class="job-description">
            Relevant Coursework: Software Engineering, Data Structures and Algorithms, Object-Oriented Programming, Signal Processing, Database Management, Operating systems.
            </div>
        </div>


        <hr class="separator"></hr>
        <div className="job education">
            <h2 className="Education">Skills</h2>
        </div>

        <div class="job">
            <div class="skill-header">
                
                <h3 class="skill-title"> Programming Languages & Databases:</h3><p>C, C++, R, Python, Java, MATLAB, JavaScript, C#, SQL</p>

            </div>
            
            
        </div>
        <div class="job">
            <div class="skill-header">
                
                <h3 class="skill-title"> Web Technologies & Frameworks :</h3><p>HTML, CSS, DOM, Bootstrap, React JS, Mongo DB, .NET, AWS.</p>

            </div>
            
            
        </div>

        <div class="job">
            <div class="skill-header">
                
                <h3 class="skill-title"> Visualizations :</h3><p>Git, Visual Studio Code, Jupyter Notebook, Bitbucket, Anaconda Navigator.</p>

            </div>
            
            
        </div>

        <div class="job">
            <div class="skill-header">
                
                <h3 class="skill-title"> Machine Learning:</h3><p>Classification, Regression, Clustering, CNN, PCA</p>

            </div>
            
            
        </div>

        <div class="job">
            <div class="skill-header">
                
                <h3 class="skill-title"> Tools and Platforms:</h3><p>C, C++, R, Python, Java, MATLAB, JavaScript, C#, SQL</p>

            </div>
            
            
        </div>


        



    </div>

         
  );
}

export default Experience;
