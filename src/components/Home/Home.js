import React from "react"
import {HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, Spann, HomeBtn} from "./HomeS.js"

const Home = () =>{
    return(
        <HomeSection>
            <div className = "container">

                <HomeInformation>

                <HomeTitle>Hello, I'm Omar Ibrahim I'm a full stack web devloper. </HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Spann>UI/UX Designer, and Front-End and Back-End Developer,</Spann> creating modern and resposive designs to Web and Mobile App. 
                       
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>


                </HomeInformation>
            </div>
            
        </HomeSection>
    )
}
export default Home