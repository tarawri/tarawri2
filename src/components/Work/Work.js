import React, {Component} from "react"
import {WorkSection, WorkTitle,Spann, WorkPart,PartTitle, PartDesc, Icon, Line }from "./WorkS"
import axios from "axios"

class Work extends Component {

    state = {
        works: []
    }

    componentDidMount  (){
        axios.get("js/data.json").then(res => {this.setState({works: res.data.works})});
      
    }

    render (){

        const {works} = this.state
        
       const worksList = works.map( (workItem) => {
            return(
                <WorkPart first = {workItem.id} key = {workItem.id}>
                        <Icon className ={workItem.icon_name}></Icon>
                        <PartTitle>{workItem.title}</PartTitle>
                        <Line />
                        <PartDesc>
                            {workItem.body}
                        </PartDesc>
                    </WorkPart>
            )
        })
        return(
            <WorkSection>
                <div className ="container">
                    <WorkTitle><Spann>My</Spann> Work</WorkTitle>
                   {worksList}
                    
                </div>
            </WorkSection>
        )
    }
    
}
export default Work