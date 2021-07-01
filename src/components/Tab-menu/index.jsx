import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './index.scss';

export default function Tabs(props) {
  const { tab } = useParams();
  let tabNameToIndex = {
    home: 0,
    videos: 1,
    playlists: 2, 
  } 
  const tabName = ['home', 'videos', 'playlists', 'community', 'channels', 'about'];
  const [selectTab, setSelectTab] = useState(
    tabNameToIndex[tab] ? tabNameToIndex[tab] : 0 
    );
  return (
    <> 
      <div className="ex1"> 
        <div className="banner-img">
          <img 
            src='http://dummyimage.com/80x80.png/5fa2dd/ffffff'
            alt='Channel bannel'
          />
        </div>
        <div className='channel-information'>
          <img 
            className='channel-avatar'
            src='http://dummyimage.com/80x80.png/5fa2dd/ffffff'
            alt='Channel avatar'
            width='80' 
            height='80'
          />
          <div className='inform-detail'>
            <div className='container'>
              <div className='channel-name'>
                Top Tik Tok
              </div>
              <img 
                  className='verified-icon'
                  src='http://dummyimage.com/80x80.png/5fa2dd/ffffff'
                  alt='Channel avatar'
                  width='16' 
                  height='16'
              />
            </div>
            <div className='subscribers'>746K subscribers</div>
          </div>
            <button className='subscribe-btn'>SUBSCRIBE</button>
        </div>
        <div className='tabs'>
          {tabName.map((item,index) => 
            <Tab 
              key = {index} 
              tabId = {index} 
              tabName = {item} 
              getState = {selectTab} 
              setState = {setSelectTab} 
            />
          )}
        </div>
      </div>
      {selectTab === 0 && <Home />}
      {selectTab === 1 && <Videos />}
      {selectTab === 2 && <Playlists /> }
    </>
  );
}

const Tab = (props) => {
  const history = useHistory();
  const {tabId, getState, setState, tabName} = props;
  const handleOnClick = (param, id) => {
    history.push(`/channel/TopTikTok/${param}`);
    setState(id);
  }
  return(
    <>  
      <button className={`tab ${getState === tabId && 'tab-actived'}`}
        onClick={()=>handleOnClick(tabName,tabId)}
      >
        {tabName.toLocaleUpperCase()}
      </button>
    </>
  );
}

function Home() {
  return <h2> This is home component </h2>;
}
function Videos() {
  return <h2> This is video component </h2>;
}
function Playlists() {
  return <h2> This is playlist component </h2>;
}
