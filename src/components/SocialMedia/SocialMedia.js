import React from "react"
import {SocialMediae, Social, Icon, SocialDesc,Spann, SpannInfo } from"./SocialMediaS.js"
import axios from "axios"

class SocialMedia extends React.Component{

    state = {
        social: []
    }

    componentDidMount (){
        axios.get("js/data.json").then(res => {
            this.setState({
                social: res.data.social
            })
        })
    }

    render() {

        const {social} = this.state

        const soicalList = social.map((socialItem) =>{
            return(
                <Social item = {socialItem.id} key = {socialItem.id} >
                <Icon className= {socialItem.icon}>  </Icon>
                <SocialDesc>
                    <Spann>{socialItem.title}</Spann>
                    <SpannInfo>{socialItem.body}</SpannInfo>
                </SocialDesc>
            </Social>
            )
        })

        return(
            <SocialMediae>
                {soicalList}
        </SocialMediae>
        
        )
    }
    
}
export default SocialMedia