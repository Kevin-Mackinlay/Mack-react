import AppBanner from './components/AppBanner/AppBanner.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/services/Services.jsx';
import WhereToBuy from './components/WhereToBuy/WhereToBuy.jsx';

const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden ">
        <Hero />
        <Services />
        <WhereToBuy />
        <AppBanner />
        <Footer/>
      </div>
    </div>
  );
};

export default App;
