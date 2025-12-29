import React from "react";
import './homepage.css'
import BasicInformation from "../../components/homepagecomponents/basicinformation/basicinformation";
import Stack from "../../components/homepagecomponents/stackcomponent/stack";
import ProjectsComponent from "../../components/homepagecomponents/projectscomponent/projectscomponent";
import Experience from "../../components/homepagecomponents/experiencecomponent/experience";

const Homepage = () => {
  return (
    <>
    <div className="wrapper">
    <div className="basiccontainer">
    <BasicInformation />
    <Stack />
    </div> 
    <div className="remainingcontainer">
      <ProjectsComponent />
      <Experience />
    </div>
    </div>
    </>
  )
}
export default Homepage;