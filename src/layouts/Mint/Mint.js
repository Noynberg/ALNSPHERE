
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Mint.css';
import starsFast from '../../assets/videos/starsFast.webm';
import starsSlow from '../../assets/videos/starsSlow_Trim.mp4';
import ship from '../../assets/images/mint/ship.png';
import leftDisplay from '../../assets/images/mint/Left_Display.png';
import BackButton from '../../assets/images/mint/Back_Button.png';
import MintButton from '../../assets/images/mint/mint_button.png';
import BulbLight from '../../assets/images/mint/Bulb_Light.png';
import MintGlow from '../../assets/images/mint/Mint_Glow.png';

const Mint = () => {

    const [minting, setMinting] = useState(false);

    const mintClick = () => {

        if(minting){
            document.getElementById('mint_glow').classList.add('hidden');
            document.getElementById('video_starsFast').classList.add('hidden');
            document.getElementById('video_starsSlow').classList.remove('hidden');
            setMinting(false);
        }
        else{
            document.getElementById('video_starsFast').classList.remove('hidden');
            document.getElementById('video_starsSlow').classList.add('hidden');
            document.getElementById('mint_glow').classList.remove('hidden');
            setMinting(true);
        }

    }

    

    return (
        <div className="mint_container">

            <div className='mint_video_container'>
    
                <video className='mint_video mint_video_starsFast hidden' muted playsInline = {true} autoPlay = {true} loop = {true} id = 'video_starsFast'>
                    <source src={starsFast} type="video/mp4"/>
                </video>
    
                <video className='mint_video mint_video_starsSlow' muted playsInline = {true} autoPlay = {true} loop = {true} id = 'video_starsSlow'>
                    <source src={starsSlow} type="video/mp4"/>
                </video>
          
            </div>

            <div className='mint_ship_container'>

                <img src = {ship} alt = 'ship' className='ship'/>

                <button className='mint_button' onClick = {mintClick}>
                    <img src = {MintButton} alt = 'mintbutton' />
                </button>

                <div className='mint_glow hidden' id = 'mint_glow'>
                    <img src = {MintGlow} alt = 'mintglow' />
                </div>

                <div className='mint_left_display ' id = 'mint_left_display'>
                    <img src = {leftDisplay} alt = 'leftdisplay' />
                </div>

                <Link to = '/' className='mint_back_button'>
                    <img src = {BackButton} alt = 'mintback' />
                </Link> 

            </div>

        </div>
    )
}

export default Mint;