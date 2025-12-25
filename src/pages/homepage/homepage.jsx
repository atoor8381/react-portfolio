import React from "react";
import './homepage.css'
import BasicInformation from "../../components/homepagecomponents/basicinformation/basicinformation";
import Stack from "../../components/homepagecomponents/stackcomponent/stack";
import ProjectsComponent from "../../components/homepagecomponents/projectscomponent/projectscomponent";

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
    </div>
    </div>
    </>
  )
}
export default Homepage;