import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {

  const [objeto, setObjeto] = useState({ temperatura: 0, umidaderelativa: 0 })    

  const recuperar = async () => {
      // aqui eu recupero um unico objeto passando o id
      await fetch("http://192.168.1.60")
          .then(response => response.json())
          .then(data => setObjeto(data))
          .catch(err => console.log(err))
      console.log("Objeto recuperado Temperatura: " + objeto.temperatura +
          " Umidade relativa: " + objeto.umidaderelativa)
  }

  useEffect(() => {
      recuperar();
  });

  return (
      <div >
          <h1 className="display-4">Temperatura do ar: {objeto.temperatura}°</h1>
          <h1 className="display-4">Umidade relativa: {objeto.umidaderelativa}%</h1>
      </div>
  );
}

export default App;
