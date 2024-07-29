import React from "react";
import './Index.css';
import btnMute from '../../assets/img/toolbar/btn-mute.png';
import btnMusic from '../../assets/img/toolbar/btn-mucsic.png';
import btnPlay from '../../assets/img/toolbar/btn-play.png';

function Toolbar () {
    return (
        <div className="button-container">
            <button className="icon-button">
                <img src={btnMute} alt="Mute Button" />
            </button>
            <button className="icon-button">
                <img src={btnMusic} alt="Music Button" />
            </button>
            <button className="icon-button">
                <img src={btnPlay} alt="Play Button" />
            </button>
        </div>
    );
}

export default Toolbar;