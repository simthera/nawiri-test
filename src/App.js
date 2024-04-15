// Css file
import './App.css';

// components
import Safari from './components/safari/safari';
import Slider from './components/image-slider/slider';

function App() {
  return (
    <div className="App">

      <Safari 
        heading="Big 5 Safari" 
        description="Experience the thrill of encountering Africa’s iconic Big Five in their natural habitats. From the plains of the Serengeti to the Kruger National Park, every moment is filled with excitement."
        link="/"
      >
        <Slider />
      </Safari>  

      <Safari 
        heading="Migration Safari" 
        description="Witness one of the greatest spectacles on Earth as millions of wildebeests, zebras, and gazelles embark on their annual migration across the Serengeti and Masai Mara ecosystems." 
        link="/"
      >
        <Slider />
      </Safari> 

      <Safari 
        heading="Africa Luxury Safari" 
        description="Experience the thrill of encountering Africa’s iconic Big Five in their natural habitats. From the plains of the Serengeti to the Kruger National Park, every moment is filled with excitement." 
        link="/"
      >
        <Slider />
      </Safari> 

      <Safari 
        heading="Migration Safari" 
        description="Witness one of the greatest spectacles on Earth as millions of wildebeests, zebras, and gazelles embark on their annual migration across the Serengeti and Masai Mara ecosystems." 
      >
        <Slider />
      </Safari> 

    </div>
  );
}

export default App;
