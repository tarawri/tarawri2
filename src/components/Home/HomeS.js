
import styled from "styled-components"

export const HomeSection = styled.div`
height: 500px;
 background: url('../images/home-bg.jpg'); 
background-size: cover;
background-position: center;
text-align: center;
position: relative;
` 
  
export const HomeInformation = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
` 
    
  export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #000000;

    font-family: "Times New Roman", Times, serif;
    `

   export const HomeInfo = styled(HomeTitle)` 
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
    `



export const HomeDesc = styled.p`
font-size: 25px;
font-weight: bold;
line-height: 1.5;
color: #eb5424;
margin-bottom: 20px;
font-family: "Times New Roman", Times, serif;
`
 


export const Spann = styled.span`
color: #000
`
   


export const HomeBtn = styled.button`
background: #eb5424;

    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold
    font-family: "Times New Roman", Times, serif;
    

    &:hover{
        background: #fff;
        color: #eb5424
    }
`
    





