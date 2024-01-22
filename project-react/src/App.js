import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// importar componestes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

function HolaMundo(nombre){
  var presentacion = <h2>Hola, soy {nombre}</h2>
  return presentacion;
}

function App() {
  var nombre ="Javier Reyes";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Hola se edita app main
        </p>
        <p>
          {HolaMundo(nombre)}
        </p>

        <section className='componnetes'>
          <MiComponente/>
          <Peliculas/>

        </section>

      </header>


    </div>
  );
}

export default App;
