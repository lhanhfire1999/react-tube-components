import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './index.scss';

// export default function TabMenu(props) {
//   let { tab } = useParams();
//   let history = useHistory();
//   const tabNameToIndex = {
//     0: 'features',
//     1: 'videos',
//     2: 'playlists'
//   };
//   const indexToTabName = {
//     features: 0,
//     videos: 1,
//     playlists: 2
//   };
//   const [selectedTab, setSelectedTab] = useState(
//     indexToTabName[tab] ? indexToTabName[tab] : 0
//   );
//   const handleChange = (event, newValue) => {
//     history.push(`/${tabNameToIndex[newValue]}`);
//     setSelectedTab(newValue);
//   };
//   return (
//     <>
//       <AppBar className='Tab-menu' position='static'>
//         <Tabs value={selectedTab} onChange={handleChange}>
//           <Tab className='Tab' label='Home' />
//           <Tab className='Tab' label='Videos' />
//           <Tab className='Tab' label='Playlists' />
//         </Tabs>
//       </AppBar>
//       {selectedTab === 0 && <Home />}
//       {selectedTab === 1 && <Videos />}
//       {selectedTab === 2 && <Playlists />}
//     </>
//   );
// }
export default function Tabs(props) {
  const { tab } = useParams();

  let tabNameToIndex = {
    home: 0,
    videos: 1,
    playlists: 2, 
  } 
  const tabName = ['home', 'videos', 'playlists'];

  const [selectedTab, setSelectedTab] = useState(
    tabNameToIndex[tab] ? tabNameToIndex[tab] : 0 
    );
 
  return (
    <>  
      <div className='Tabs'>
        {tabName.map((item,index) => 
          <Tab 
            key={index} 
            tabId={index} 
            tabName={item} 
            getState = {selectedTab} 
            setState={setSelectedTab} 
          />
        )}

      </div>
      {selectedTab === 1 ?  <Videos /> 
      : selectedTab === 2 ?  <Playlists /> 
      : <Home />  }         
    </>
  );
}

function Tab(props){
  const history = useHistory();
  const {tabId, getState, setState, tabName} = props;

  const handleOnClick = (param, id) => {
    history.push(`/channel/${param}`);
    setState(id);
  }

  return(
    <>  
      <div className={`Tab ${ getState === tabId && 'Tab-actived'}`}
        onClick={()=>handleOnClick(tabName,tabId)}
      >
        {tabName.toLocaleUpperCase()}
      </div>
    </>
  )
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
