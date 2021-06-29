import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './index.scss';

export default function Tabs2(){
  const {params} = useParams();
  const history = useHistory();
  const [selectTab, setSelectTab] = useState(0);
  return(
    <>
      <div className="Channel-profile">
        <img className="Channel-img" src = "http://dummyimage.com/80x80.png/5fa2dd/ffffff"/>
      </div>
      <div className ='Tabs'>
        <Tab 
          key={0} 
          tabId={0} 
          setState={setSelectTab}>
          VIDEOS
        </Tab>
        <Tab 
          key={1} 
          tabId={1} 
          setState={setSelectTab}>
          PLAYLISTS
        </Tab>

      </div>
      {selectTab === 0 && <Videos />}
      {selectTab === 1 && <Playlists /> }
    </>
  )
}

function Tab(props){
  const {tabId, setState, children} = props;
  const handleOnClick = (id) => {
    setState(id);
  }
  return(
    <> 
      <button className="Tab" onClick= {() => handleOnClick(tabId)} >{children}</button>
    </>
  )
}

// function Home() {
//   return <h2> This is home component </h2>;
// }
function Videos() {
  return <h2> This is video component </h2>;
}
function Playlists() {
  return <h2> This is playlist component </h2>;
}