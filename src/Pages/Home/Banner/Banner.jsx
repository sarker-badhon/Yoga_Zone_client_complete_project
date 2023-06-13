
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slider1 from '../../../assets/slider/yoga-slider-1.jpg'
import slider2 from '../../../assets/slider/yoga-slider-2.jpg'
import slider3 from '../../../assets/slider/yoga-slider-3.jpg'
import slider4 from '../../../assets/slider/yoga-slider-4.jpg'
import './Banner.css'
// import { Fade, Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const Banner = () => {

  return (
    <div>
      <Carousel className='h-screen' infiniteLoop showThumbs={true}  >
        <div>
          <div className="hero min-h-screen" style={{ backgroundImage: `url(${slider1})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" text-center px-3 lg:w-[600px]">

                
                <h1 className="mb-5 text-5xl font-bold space-x-3 tracking-wide animate-zoom-in">
                  WELCOME TO OUR YOGAZONE
                  </h1>
                
                <p className="mb-5 text-xl ">
               
               
                  Yoga is an ancient system of physical, mental and spiritual practices that have been  passed down through the generations from teacher to student.
                  </p>
                <button className="btn bg-[#ff91b8] text-white px-10 text-xl">
                <Fade delay={1e3} cascade damping={1e-1}>
                  READ MORE..
                  </Fade>
                  </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero min-h-screen" style={{ backgroundImage: `url(${slider2})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="text-center px-3 lg:w-[600px]">
                <h1 className="mb-5 text-5xl font-bold space-x-3 tracking-wide animate-zoom-in">WELCOME TO OUR YOGAZONE</h1>
                <p className="mb-5 text-xl w-[600px]">Yoga is an ancient system of physical, mental and spiritual practices that have been passed down through the generations from teacher to student. Yogic practices include breathing techniques, postures, relaxation, chanting, and other meditation methods. There are many different styles of yoga, each with their own unique focus and approach to creating a unitive state.</p>
                <button className="btn bg-[#ff91b8] text-white px-10 text-xl">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero min-h-screen" style={{ backgroundImage: `url(${slider3})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="text-center px-3 lg:w-[600px]">
                <h1 className="mb-5 text-5xl font-bold space-x-3 tracking-wide animate-zoom-in">WELCOME TO OUR YOGAZONE</h1>
                <p className="mb-5 text-xl w-[600px]">Yoga is an ancient system of physical, mental and spiritual practices that have been passed down through the generations from teacher to student. Yogic practices include breathing techniques, postures, relaxation, chanting, and other meditation methods. There are many different styles of yoga, each with their own unique focus and approach to creating a unitive state.</p>
                <button className="btn bg-[#ff91b8] text-white px-10 text-xl">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero min-h-screen" style={{ backgroundImage: `url(${slider4})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="text-center px-3 lg:w-[600px]">
                <h1 className="mb-5 text-5xl font-bold space-x-3 tracking-wide animate-zoom-in">WELCOME TO OUR YOGAZONE</h1>
                <p className="mb-5 text-xl w-[600px]">Yoga is an ancient system of physical, mental and spiritual practices that have been passed down through the generations from teacher to student. Yogic practices include breathing techniques, postures, relaxation, chanting, and other meditation methods. </p>
                <button className="btn bg-[#ff91b8] text-white px-10 text-xl">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
