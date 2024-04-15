import React from "react";
// React courasel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Images 
import img1 from '../../assets/image1.webp';
import img2 from '../../assets/image2.webp';
import img3 from '../../assets/image3.webp';

const Slider = () => {
        return (
            // courasel with some settings
            <Carousel showThumbs={false} showStatus={false} autoPlay={true}>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
        );        
}

export default Slider;
