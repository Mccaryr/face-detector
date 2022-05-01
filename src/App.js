import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank';
import Particles from 'react-tsparticles'
import {tsParticles} from 'tsparticles-engine'
import { loadFull } from "tsparticles";
import { useState } from 'react'
import Clarifai from 'clarifai'
import './App.css';



const App = () => {
  const app = new Clarifai.App({
    apiKey:'3cd6364c161e4a7e9a180b1f01074ea6'
  })
  
  const [imageUrl, setImageUrl] = useState("");
  const [input, setInput] = useState('');
  const [box, setBox] = useState({})


  const particlesInit = async (main) => {
    // console.log(main);

    await loadFull(tsParticles);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFaceData = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(`width: ${width},  height: ${height}`)
  }

  const onInputChange = (event) => {
    setInput(event.target.value)

  }


  const onButtonSubmit = () => {  
    setImageUrl(input) 
    app.models.predict(Clarifai.FACE_DETECT_MODEL, imageUrl).then(response => calculateFaceLocation(response))
    .catch(err => console.log(err));
  }

  const particleOptions = {
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }

    return (
      <div className="App">

        <Navigation />
        <div className="particles">
        <Particles  id="tsparticles"  init={particlesInit} loaded={particlesLoaded} options={particleOptions} />
        </div>
        <Rank />
        <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
        <div className="predictiveImage">
        <FaceRecognition imageUrl={imageUrl}/>
        </div>
      </div>
    );
}

export default App;
