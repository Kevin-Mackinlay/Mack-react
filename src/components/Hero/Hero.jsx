import BgImage from '../../assets/bg-slate.png';
import iphone1 from '../../assets/iphone1.png';
import Navbar from '../Navbar/Navbar';
import {motion} from 'framer-motion';

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/*Navbar section here*/}
          <Navbar />
          {/*Hero section here*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1 
              initial={{opacity:0, y: -100 }} 
              animate={{opacity:1, y:0}}
              transition={{type:"spring", stiffness:100,
                damping: 10,
                delay: 1
              }} className="text-7xl font-bold leading-tight ml-14">Apple</motion.h1>

              <motion.div 
              
               initial={{opacity:0, y: 100 }} 
              animate={{opacity:1, y:0}}
              transition={{type:"spring", stiffness:100,
                damping: 10,
                delay: 1.2}}
              
              
              
              
              className="relative ">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl ">More powerful</h2>
                  <h2 className="text-sm opacity-55 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia rem, a explicabo sint numquam laboriosam consequatur sapiente dolore. </h2>
                </div>

                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero Image section */}
            <div className="relative">
              <img src={iphone1} alt="iphone" className="relative z-40 h-[400px] md:h-[500px] top-20 img-shadow" />

              {/* {big text area here} */}
              <div className="absolute -top-10 left-[400px] z-[1] ">
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none ">Apple</h1>
              </div>
            </div>

            {/* third div section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className=" opacity-0 text-7xl font-bold leading-tight ml-14">Apple</h1>

              <div className="relative ">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl ">New Iphone</h2>
                  <h2 className="text-sm opacity-55 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia rem, a explicabo sint. Non mollitia rem, a explicabo sint. </h2>
                </div>

                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
