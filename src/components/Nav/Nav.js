
import React from "react"
import {Link} from "react-router-dom"

import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor} from"./NavS.js"

const Nav = () =>{
    return(
        <NavbarSection>

            <div className = "container">

                <Logo>
                    <LogoText> Profile</LogoText>
                </Logo>

                <UlList>
                    <ListItem> <Link to = "/">Home </Link></ListItem>
                    <ListItem> <Anchor>Work </Anchor></ListItem>
                    <ListItem> <Anchor>Protfolio </Anchor></ListItem>
                    <ListItem> <Anchor>Resume </Anchor></ListItem>
                    <ListItem> <Anchor>About </Anchor></ListItem>
                    <ListItem> <Link to = "/contact">Contact </Link></ListItem>
                
                </UlList>

            </div>

        </NavbarSection>
    )
}
export default Nav