import * as React from 'react';
import './index.scss';

export default function ScrollTabs(){
  const ref = React.useRef(null);
  const nameTab = [
    'All', 'Mixes', 'Electronic Dance Music', 
    'Music', 'League of Legends', 'Young music', 
    'Blackpink', 'Rapping', 'Youth Music',
  ];
  const [previousBtnHide, setPreviousBtnHide] = React.useState(true);
  const [nextBtnHide, setNextBtnHide] = React.useState(false);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    let {scrollLeft, scrollWidth, clientWidth} = ref.current;
    let scrollMaxWidth = scrollWidth-clientWidth;
    if(!scrollLeft){
      setPreviousBtnHide(true);
    }
    else if(scrollLeft < scrollMaxWidth){
      setPreviousBtnHide(false);
      setNextBtnHide(false);
    }
    else if(scrollLeft === scrollMaxWidth){
      setNextBtnHide(true);
    }
  };

  return (
    <>
    <div className="ex2">
      <div className="container">
        <button 
          className={`btn ${previousBtnHide && 'btn-hide'}`}
          onClick={() => scroll(-41)}
        >
          &#8249;
        </button>
        <div className ="tabs" ref={ref}>
          {nameTab.map((item,i) => {
            return(
              <Tab
                key={i}
                id={i}
                name={item}
              />
            )
          })} 
        </div>
        <button 
          className={`btn ${nextBtnHide && 'btn-hide'}`}
          onClick={() => scroll(41)}
        >
          &#8250;
        </button>
      </div>
    </div>
    </>
  )
}

function Tab(props){
  const { id, name} = props;
  const handOnClick = (e)=> {
    console.log(e.target.value);
  };
  return(
    <>
      <li className='tab'>
          <input 
            type='radio' 
            id={id} name='tab' 
            value={name.toLowerCase()}
            onClick = {handOnClick}
          />
          <label htmlFor={id}>{name}</label>    
      </li>

    </>
  )
}