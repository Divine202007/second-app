import './App.css';
import './style.css';
import imageSrc from './imageInSrc.jpg' ;

function App() {
  return (
    <div className="App">
      
      <div style = {{border: "solid 1px black", maxWidth:"100 vw"}}>

        <h1 className="title red">JSX</h1>

        <br/>

        <img src= {imageSrc} alt="imagesrc"/>

        <br/>
      
        <img src='/imageInPublic.jpg' alt="imagepublic" />

      </div>

  <vidéo width="320" height="240" contrôles>

  <source src="maVidéo.mp4" type="video/mp4" />

  </vidéo>
    </div>
  );
}

export default App;
