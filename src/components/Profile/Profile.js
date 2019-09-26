import React from "react"
import "./ProfileS.css"

const Profile = () =>{
    return(
        <div className="profile_skills">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span> 
                            Omar Ibrahim
                        </li>
                        {/* <li className="profile-item">
                            <span>Birthday</span> 
                            21/1/1996
                        </li> */}
                        <li className="profile-item">
                            <span>Address</span> 
                            Jeddah
                        </li>
                        <li className="profile-item">
                            <span>Phone</span> 
                            00966555350000
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            tarawri.dev@gmail.com
                        </li>
                        <li className="profile-item">
                            <span>Website</span>
                            <span className="web">www.#####.com</span>
                        </li>
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    {/* <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p> */}
                    <div className="bar">
                        <span className="title">HTML, CSS, Bootstrap, </span>
                        <span className="perc">85%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">JavaScript, Java, Ruby on Rails, React</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>

                   
                    
                    <div className="bar">
                        <span className="title">C++, JQuery, SQL, MangoDB </span>
                        <span className="perc">77%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>


                    <div className="bar">
                        <span className="title">MVC, AJAX, JSON, Get Hub </span>
                        <span className="perc">75%</span>
                        <div className="parent">
                            <span className="sp4"></span>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default Profile