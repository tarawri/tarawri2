import React, {useState, useEffect} from "react"
import {PortfolioSection, PortfolioTitle, Spann, PortfolioList, PortfolioItem, ImageWapper, Image, Overlay, OverSpan} from "./ProtfolioS.js"
import axios from "axios"


const Protfolio = () =>{

    const [images, setImages ] = useState([])

    useEffect (() => {
        axios.get("js/data.json").then(res => {
            setImages(res.data.portfolio)
        })
    }, []);

    const ProtfolioImages = images.map((imageItem) =>{
        return(
            <ImageWapper key = {imageItem.id}>
                <Image src={imageItem.image} alt="" />
                <Overlay>
                    <OverSpan>
                        Show Image
                    </OverSpan>
                </Overlay>
            </ImageWapper>
      
        )
    })
    return(
        <PortfolioSection>
        <PortfolioTitle><Spann>My</Spann> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>UI/UX Desige</PortfolioItem>
            <PortfolioItem>Java Script</PortfolioItem>
            <PortfolioItem>React JS</PortfolioItem>
            <PortfolioItem>Node JS</PortfolioItem>
            <PortfolioItem>Roub on Rails</PortfolioItem>
            <PortfolioItem>SQL/MangoDB</PortfolioItem>
            <PortfolioItem>Game Desige</PortfolioItem>
            
        </PortfolioList>
        
        <div class="box">
           
            
            {ProtfolioImages}

        
        </div>
        
    </PortfolioSection>
    )
}
export default Protfolio