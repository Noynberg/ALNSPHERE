
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IKImage } from "imagekitio-react";
import Countdown from 'react-countdown';
import './Mint.css';
import starsFast from '../../assets/videos/starsFast.mp4';
import starsSlow from '../../assets/videos/starsSlow.mp4';
// import ship from '../../assets/images/mint/ship.png';

import BackButton from '../../assets/images/mint/Back_Button.png';
import MintButton from '../../assets/images/mint/Mint_btn_desktop.png';
import MintButtonMobile from '../../assets/images/mint/Mint_btn_mobile.png';


const Mint = () => {

    const [minting, setMinting] = useState(false);
    const [counter, setCounter] = useState(0);

    const mintClick = () => {

        if(minting){
            // document.getElementById('mint_glow').classList.add('hidden');
            // document.getElementById('mint_right_light').classList.add('hidden');
            document.getElementById('video_starsFast').classList.add('hidden');
            document.getElementById('video_starsSlow').classList.remove('hidden');
            setMinting(false);
        }
        else{
            document.getElementById('video_starsFast').classList.remove('hidden');
            document.getElementById('video_starsSlow').classList.add('hidden');
            // document.getElementById('mint_right_light').classList.remove('hidden');
            // document.getElementById('mint_glow').classList.remove('hidden');
            setMinting(true);
        }
    }

    const incrementCounter = () => {
        if(counter >= 4){
            setCounter(5);
        }
        else{
            setCounter(prev => prev + 1);
        }
    }

    const decrementCounter = () => {
        if(counter > 0){
            setCounter(prev => prev - 1);
        }
    }


    // Renderer callback with condition
    const renderer = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
        // Render a completed state
        return <h2>Coming Soon</h2>
        } else {
        // Render a countdown
        return <h2>{days} days, {hours}:{minutes}:{seconds}</h2>;
        }
    };

    return (
        <>
        <div className='mint_overlay'>
            <Link to = '/'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 512">
                    <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/>
                </svg>
            </Link>
            <h2> <Countdown date={'2023-05-30T01:02:03'} renderer={renderer} /> </h2>
        </div>
        <div className="mint_container">

        
            <div className='mint_ship_container'>

                <div className='mint_video_container'>                
                    <video className='mint_video mint_video_starsFast hidden' muted playsInline = {true} autoPlay = {true} loop = {true} id = 'video_starsFast'>
                        <source src={starsFast} type="video/mp4"/>
                    </video>

                    <video className='mint_video mint_video_starsSlow' muted  playsInline = {true} autoPlay = {true} loop = {true} id = 'video_starsSlow'>
                        <source src={starsSlow} type="video/mp4"/>
                    </video>

                </div>

                
                <div className='ship'></div>
                

                <button className='mint_button' onClick = {mintClick}>
                    <img src = {MintButton} alt = 'mintbutton' />
                </button>

                <button className='mint_button_mobile' onClick = {mintClick}>
                    <img src = {MintButtonMobile} alt = 'mintbutton' />
                </button>

                <div className = 'mint_counter'>
                    <button className='mint_counter_button mint_counter_button_add' onClick={decrementCounter}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 320 512">
                        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>
                    </svg>
                    </button>
                    <p className='mint_counter_text'>{counter >= 5 ? 'Greedy' : counter}</p>
                    <button className='mint_counter_button mint_counter_button_sub' onClick={incrementCounter}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 320 512">
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
                        </svg>
                    </button>
                </div>

                <Link to = '/' className='mint_back_button'>
                    <img src = {BackButton} alt = 'mintback' />
                </Link> 

            </div>

        </div>
        </>
    )
}

export default Mint;