
import { useEffect, useRef } from 'react';
import { IKImage } from "imagekitio-react";

const RGBCard = ({title, imagepath, description}) => {

    const cardContainerRef = useRef(null);
    const cardBoxRef = useRef(null);

    useEffect(() => {

        const cardContainer = cardContainerRef.current;
        const cardBox = cardBoxRef.current;
        
        // const title = document.querySelector(".cardDetails h1");
        // const info = document.querySelector(".cardDetails p");
        // const productImg = document.querySelector(".cardHeader img");
        
                //Moving Animation Event
        cardContainer.addEventListener("mousemove", (e) => {
            let xPosition = ((e.pageX - window.innerWidth / 2) / 25);
            let yPosition = ((e.pageY - window.innerHeight / 2) / 25) / 10;
            cardBox.style.transform = "rotateX("+ xPosition +"deg) rotateY("+ yPosition +"deg)";
        });
        // Animation in
        cardContainer.addEventListener('mouseenter', (e) => {
            cardBox.style.transition = "none";
            // title.style.transform = "translateZ(150px)";
            // info.style.transform = "translateZ(75px)";
            // productImg.style.transform = "translateZ(120px)";
        });
        // Animation out
        cardContainer.addEventListener('mouseleave', (e) => {
            cardBox.style.transform = "rotateX(0deg) rotateY(0deg)";
            cardBox.style.transition = "all 0.5s ease";
            // title.style.transform = "translateZ(0px)";
            // info.style.transform = "translateZ(0px)";
            // productImg.style.transform = "translateZ(0px) rotate(0deg)";
        });
    })

    return (
        <div class="cardContainer" ref = {cardContainerRef}>
            <div class="cardBox rgb" ref = {cardBoxRef}>
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
        </div>
    )
}

export default RGBCard;