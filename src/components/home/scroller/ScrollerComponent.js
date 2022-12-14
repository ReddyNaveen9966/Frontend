import React from 'react'
import HomeImage from "../../../assets/homepage-image1.jpg"
import "./ScrollerComponentStyles.css"
import { Card } from 'reactstrap';


const ScrollerComponent = () => {
    return (
        <div className="home-image-container">
            <Card style={{ background: `url(${HomeImage})` }} className='image-container' >
                <p>Reddy's Packers and Movers</p>
            </Card>
        </div>
    )
}

export default ScrollerComponent
