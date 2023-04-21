import './App.css';
import './hojas-de-estilo/Boton.css';
import './hojas-de-estilo/Contador.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/fcc_primary_large.jpeg';
import {useState} from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    console.log('(+) Click');
    setNumClics(numClics + 1);
  }

  const restarClic = () => {
    console.log('(-) Click');
    setNumClics(numClics - 1);
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
    setNumClics(0);
  }

  return (
    <div className = "App">
      <div className ='frecodecamp-logo-contenedor'>
        <img 
        className ='freecodecamp-logo'
        src = {freeCodeCampLogo}
        alt ='Logo de Feecodecamp'/>
      </div>
      <div className ='contenedor-principal'>
        <Contador numClics = {numClics} />
        <Boton 
          texto ='(+) Click'
          esBotonDeClic = {true}
          manejarClic = {manejarClic} />
        <Boton 
          texto =' (-) Click'
          esBotonDeClic = {true}
          manejarClic = {restarClic} />
        <Boton
          texto = 'Reiniciar'
          esBotonDeClic = {false}
          manejarClic = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
