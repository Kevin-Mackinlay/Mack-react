import Hero from './components/Hero/Hero.jsx';
import Services from './components/services/Services.jsx';

const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden ">
        <Hero />
        <Services />
      </div>
    </div>
  );
};

export default App;
