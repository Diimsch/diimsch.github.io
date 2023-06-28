import './App.css';
import layer0 from './assets/layer_0_export.png';
import layer1 from './assets/layer_1_export.png';
import layer2 from './assets/layer_2_export.png';
import layer3 from './assets/layer_3_export.png';
import layer4 from './assets/layer_4_export.png';
import layer5 from './assets/layer_5.png';
import layer6 from './assets/layer_6.png';

function App() {
  return (
    <div className='App'>
      <div className='background'>
        <img className="background-image" alt='background-image' src={layer0} />
      </div>
      <div className='parallax'>
        <div className='parallax__layer parallax__layer__3'>
          <img alt='paralax layer' src={layer1} />
        </div>
        <div className='parallax__layer parallax__layer__4'>
          <img alt='paralax layer' src={layer2} />
        </div>
        <div className='parallax__layer parallax__layer__5'>
          <img alt='paralax layer' src={layer3} />
        </div>
        <div className='parallax__layer parallax__layer__6'>
          <img alt='paralax layer' src={layer4} />
        </div>
        {/* <div className='parallax__layer parallax__layer__5'>
          <img alt="paralax layer" src={layer5} />
        </div>
        <div className='parallax__layer parallax__layer__6'>
          <img alt="paralax layer" src={layer6} />
        </div> */}
        <div className='parallax__cover'></div>
      </div>
    </div>
  );
}

export default App;
