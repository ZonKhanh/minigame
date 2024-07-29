// import React from 'react';
import React from 'react';
import './Index.css';
import GamecontentModal from '../GameContentModal/Index';
import ResultGameModal from '../ResultGameModal/Index';
import CountdownModal from '../CountdownModal/Index';
import bgPageContent from '../../assets/img/general/bg-page-content.png';

function PlayPage() {

  return (
    <div className="main-bottom-site">
      <div className="play-page-main-bottom-site">
        <div className="container main-bottom-content-row">
          <div className="play-page-content" id="play-page" style={{
            height: '100%',
            minHeight: '85vh',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `url(${bgPageContent})`, // Sử dụng biến ảnh đã nhập
            borderRadius: '20px'
          }}>
            <audio className="audio-background"></audio>
            <audio className="audio-fail"></audio>
            <ResultGameModal />
            <CountdownModal />
            <GamecontentModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayPage;
