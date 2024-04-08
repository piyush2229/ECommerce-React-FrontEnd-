import hand from "../assets/hero/hand.png";
import girl from "../assets/hero/girl.png";
import './Hero.css'
import arrow from "../assets/hero/arrow-right.png"

function Hero() {
  return (
    <div className="hero">
      <div className="left-hero">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="">
          <div className="hand-icon">
            <p>new</p>
            <img src={hand} alt="hand" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div className="">
            Latest Collection
        </div>
        <div className="arrow">
            <img src={arrow} alt="arrow" /> </div>           
          </div>
      </div>
      <div className="right-hero">
      <img src={girl} alt="girl" />
      </div>
    </div>
  );
}

export default Hero;
