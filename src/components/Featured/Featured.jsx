import React, { useRef } from 'react';
import './Featured.css'
import house1 from '../../assets/house5.jpg'
import house2 from '../../assets/house6.jpg'
import house3 from '../../assets/house7.jpg'
import house4 from '../../assets/house8.jpg'
import house5 from '../../assets/house9.jpg'
import house6 from '../../assets/house10.jpg'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'
import call from '../../assets/telephone.png'
import watsapp from '../../assets/social.png'
import favorite from '../../assets/favourite.png'

const Featured = () => {

  const slider = useRef();
  let tx = 0;

const sliderForward = ()=>{
  if(tx > -50){
      tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}

const sliderBackward = ()=>{
  if(tx < 0){
      tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='featured-con'>
      
      <h1>Featured Property Sale</h1>
      <div className='slide-btn'>
      <img src={back_btn} alt="" className='next-btn' onClick={sliderBackward} />
      <img src={next_btn} alt="" className='back-btn' onClick={sliderForward}/>
      </div>
      <div className='slide-con'>
      <div className='featured-wrap' ref={slider}>
        
      <div className='box'>
          <div className='plot'><img src={house1} alt=''/></div>
          <div className='plot-details'>
            <div className='place-name'>
              <h2>GODOWN SPACE AVAILABLE IN TATIBANDH</h2>
              <p>16,00,000</p>
            </div>
            <div className='contact'>
              <img src={call} alt=''/><img src={watsapp} alt=''/><img src={favorite} alt=''/>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='plot'><img src={house2} alt=''/></div>
          <div className='plot-details'>
            <div className='place-name'>
              <h2>RESIDENTIAL PLOT AVAILABLE IN PROFESSOR COLONY ( BHATAGAON )</h2>
              <p>16,00,000</p>
            </div>
            <div className='contact'>
              <img src={call} alt=''/><img src={watsapp} alt=''/><img src={favorite} alt=''/>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='plot'><img src={house3} alt=''/></div>
          <div className='plot-details'>
            <div className='place-name'>
              <h2>RESIDENTIAL PLOT AVAILABLE IN PROFESSOR COLONY ( BHATAGAON )</h2>
              <p>16,00,000</p>
            </div>
            <div className='contact'>
              <img src={call} alt=''/><img src={watsapp} alt=''/><img src={favorite} alt=''/>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='plot'><img src={house4} alt=''/></div>
          <div className='plot-details'>
            <div className='place-name'>
              <h2>2 BHK RESIDENTIAL HOUSE AVAILABLE IN PURANI BASTI</h2>
              <p>16,00,000</p>
            </div>
            <div className='contact'>
              <img src={call} alt=''/><img src={watsapp} alt=''/><img src={favorite} alt=''/>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='plot'><img src={house5} alt=''/></div>
          <div className='plot-details'>
            <div className='place-name'>
              <h2>3 BHK RESIDENTIAL HOUSE AVAILABLE IN HIRAPUR</h2>
              <p>16,00,000</p>
            </div>
            <div className='contact'>
              <img src={call} alt=''/><img src={watsapp} alt=''/><img src={favorite} alt=''/>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='plot'><img src={house6} alt=''/></div>
          <div className='plot-details'>
            <div className='place-name'>
              <h2>2 BHK SEMI-FURNISHED FLAT AVAILABLE IN GUDHYARI</h2>
              <p>16,00,000</p>
            </div>
            <div className='contact'>
              <img src={call} alt=''/><img src={watsapp} alt=''/><img src={favorite} alt=''/>
            </div>
          </div>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Featured;
