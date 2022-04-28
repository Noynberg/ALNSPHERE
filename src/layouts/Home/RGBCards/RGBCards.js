
import './RGBCards.css';
import RGBCard from './RGBCard';

const RGBCards = () => {

    return(
        <div className='rgb-cards'>
            <RGBCard href = '/marketplace/collection' title = 'Marketplace' 
                imagepath = '/rbgcards/Marketplace__wlCYV1JED.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1650719214241' 
                description = 'Lorem ipsum dolor sit demoise amet consectetur, Ducimusele, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor' 
            />
            <RGBCard href = '/' title = 'Partnership' 
                imagepath = '/rbgcards/Partnership_zHxHhEoPi.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1650719210586' 
                description = 'Lorem ipsum dolor sit demoise amet consectetur, Ducimusele, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor' 
            />
            <RGBCard href = '/game' title = 'Gameplay' 
                imagepath = '/rbgcards/GamePlay_Z8vKL5N6g.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1650719203243' 
                description = 'Lorem ipsum dolor sit demoise amet consectetur, Ducimusele, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor' 
            />
            {/* <div className='card-container'>
                <div class="card">
                    <div class="card-image" ></div>
                    <div class="card-text">
                        <span class="date">4 days ago</span>
                        <h2>Post One</h2>
                        <p>Lorem ipsum dolor sit demoise amet consectetur, Ducimusele, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
                    </div>
                </div>
            </div>
                <div class="card rgb">
                    <div class="card-image card2"></div>
                    <div class="card-text card2">
                        <span class="date">1 week ago</span>
                        <h2>Post Two</h2>
                        <p>Adipisicing elit. Ducimus, repudiandae corrupti tialeno des ameto temporibus omnis provident illum maxime quod. Lorem ipsum dolor</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image card3"></div>
                    <div class="card-text card3">
                    <span class="date">3 week ago</span>
                    <h2>Post Three</h2>
                    <p>Repudiandae repudiandae de corrupti amet temporibus omnis si provident illum maxime. Ducimus, lorem ipsum dolor adipisicing elit</p>
                    </div>
                </div> */}

            
        </div>
    )
}

export default RGBCards;