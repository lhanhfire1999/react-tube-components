import * as React from 'react';
import './index.scss'

export default function VideoInfoBox(){
  const [collapsed, setCollapsed] = React.useState(true);

  const handleClick = () =>{
    setCollapsed(!collapsed);
  };
  return(
    <div className="video-info-container">
      <div className="video-info">
        <div className="video-title">{`WALK ON DA STREET - 16 Typh x 16 BrT (Cukak Remix) - Nhạc Nền Hot Tiktok 1 Hour`}</div>
        <div className="publish">{`Apr 17, 2021`}</div>
      </div>
      <div className='video-info-box'>
        <div className="top">
          <img 
          src="http://via.placeholder.com/48x48" 
          alt="Avatar" 
          width={48}
          height={48}
          />
          <div className="channel-info">
            <div className="channel-name">JonTronShow</div>
            <div className="num-of-subcribers">6.6M subscribers</div>
          </div>
          <div className="btn-subs">
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>
        <div className= {`video-description ${collapsed ? 'collapsed' : 'extended' } `}>
          <p>
            {`AUTOGRAPHED ALBUMS & MERCH: http://www.HangOverGang.com
            SUBSCRIBE TO THIS CHANNEL &  CONNECT W/ TOM MACDONALD!
            FACEBOOK: http://www.facebook.com/TomMacDonaldOfficial
            INSTAGRAM: http://www.instagram.com/hangovergang
            TWITTER: http://www.twitter.com/IAmTomMacDonald
            WEBSITE: http://www.hangovergang.com
            SPOTIFY: http://spoti.fi/2H35BQR
            iTUNES: https://apple.co/2BQucZO

            WRITTEN BY Tom MacDonald
            BEAT PRODUCED BY Tom MacDonald

            SHOT and DIRECTED by Nova Rockafeller
            http://www.instagram.com/NovaRockafeller

            MIXED & MASTERED by Evan Morgan 
            http://www.evanmorganproductions.com 
            http://www.youtube.com/user/emorganproductions
            http://www.instagram.com/EMorganProductions`}
          </p>
        </div>
        <span
          className="btn-show"
          onClick={handleClick}
        >
          {collapsed ? 'SHOW MORE' : 'SHOW LESS'}
        </span>
      </div> 
    </div>
  )
}