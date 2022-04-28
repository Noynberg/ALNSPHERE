
import { useEffect, useRef } from 'react';
import { IKImage } from "imagekitio-react";
import { Link } from 'react-router-dom';

const RGBCard = ({href, title, imagepath, description}) => {


    return (
        <Link class="cardContainer" to = {href}>
            <div class="cardBox rgb" >
                <div class="cardHeader">
                <IKImage
                    urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                    path={imagepath}
                    loading="lazy"
                    lqip={{ active: true }}
                />
                </div>
                <div class="cardDetails">
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                    
                </div>
                {/* <div class="cardFooter">
                    <a href="javascript:;">Purchase</a>
                </div> */}
            </div>
        </Link>
    )
}

export default RGBCard;