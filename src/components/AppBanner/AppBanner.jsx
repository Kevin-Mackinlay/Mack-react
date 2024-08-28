import banner from '../../assets/website/banner.jpg';
import bannerImg from '../../assets/website/coffee-cover.jpg';
import AppStoreImg from '../../assets/website/app_store.png';
import PlaystoreImg from '../../assets/website/play_store.png';
import { motion } from 'framer-motion';

const BannerStyle = () => ({
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
});

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div style={BannerStyle()} className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl">
        <div>
          <div className="space-y-6 max-w-xl mx-auto ">
            <h1 className="text-2xl text-center sm:text-4xl font-semibold ">Download th App</h1>

            <p className="text-center sm:px-2 "> lorem ipsum dolor sit amet consectetur adipisicing.</p>
            {/* images link */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
