import React from "react"
import {AboutSection, AboutInfo, InfoTitle, Spann, InfoDir, InfoDesc} from "./AboutS.js"

const About = () =>{
    return(
        <AboutSection>

        <div className ="container">
        
        <AboutInfo>
            <InfoTitle><Spann>This is</Spann> Me</InfoTitle>
            <InfoDir>Creative Director</InfoDir>
            <InfoDesc>
            I'm web designer & front-end and back-end developer. I'm interested in all kinds of visual communication, but my major focus is on designing web, mobile & tablet interfaces. I also have skills in other fields like desing and devlope 2d game.....
            </InfoDesc>
            {/* <p class="info-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </p> */}
        </AboutInfo>
        </div>
</AboutSection>
    )
}
export default About