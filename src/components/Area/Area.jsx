import React, { useRef } from 'react';
import './Area.css'
import place1 from '../../assets/amlidih.webp'
import place2 from '../../assets/bhatagaon.webp'
import place3 from '../../assets/ddNagar.webp'
import place4 from '../../assets/gudhyari.webp'
import place5 from '../../assets/nayaraipur.webp'
import place6 from '../../assets/sadduMowa.webp'
import place7 from '../../assets/santoshiNagar.webp'
import place8 from '../../assets/shankarNagar.webp'
import place9 from '../../assets/tatibandh.webp'
import place10 from '../../assets/telibandha.webp'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'


const Area = () => {

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
    <div className='explore'>
      
      <div className='slider-btn'>
      <img src={back_btn} alt="" className='next-btn' onClick={sliderBackward} />
      <img src={next_btn} alt="" className='back-btn' onClick={sliderForward}/>
      </div>
      <h1>Trending Area In Raipur</h1>
      <main>
      <section ref={slider}>
      <div className='place-detail'>
          <div className='place-img'><img src={place1} alt=''/></div>
          <div className='information'><h3>Amlidih</h3><p>10000+ flats</p></div>
        </div>
        <div className='place-detail'>
          <div className='place-img'><img src={place2} alt=''/></div>
          <div className='information'><h3>Bhatagoan</h3><p>10000+ flats</p></div>
        </div>
        <div className='place-detail'>
          <div className='place-img'><img src={place3} alt=''/></div>
          <div className='information'><h3>DD Nagar</h3><p>10000+ flats</p></div>
        </div>
        <div className='place-detail'>
          <div className='place-img'><img src={place4} alt=''/></div>
          <div className='information'><h3>Gudhyari</h3><p>10000+ flats</p></div>
        </div>
        <div className='place-detail'>
          <div className='place-img'><img src={place5} alt=''/></div>
          <div className='information'><h3>Naya Raipur</h3><p>10000+ flats</p></div>
        </div>
        <div className='place-detail'>
          <div className='place-img'><img src={place6} alt=''/></div>
          <div className='information'><h3>Saddu-Mowa</h3><p>10000+ flats</p></div>
        </div>
        <div className='place-detail'>
          <div className='place-img'><img src={place7} alt=''/></div>
          <div className='information'><h3>Santoshi Nagar</h3><p>10000+ flats</p></div>
        </div>
        <div className='place-detail'>
          <div className='place-img'><img src={place8} alt=''/></div>
          <div className='information'><h3>Shankar Nagar</h3><p>10000+ flats</p></div>
        </div>
        <div className='place-detail'>
          <div className='place-img'><img src={place9} alt=''/></div>
          <div className='information'><h3>Tatibandh</h3><p>10000+ flats</p></div>
        </div>
        <div className='place-detail'>
          <div className='place-img'><img src={place10} alt=''/></div>
          <div className='information'><h3>Telibandha</h3><p>10000+ flats</p></div>
        </div>
        
      </section>
      </main>
    </div>
  );
}

export default Area;
