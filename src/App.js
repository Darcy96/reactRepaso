import logo from './logo.svg';
import './App.css';
import CardPrime from './components/card';


function App() {

  /*  let titulo = "Card de primereact"
   let subtitulo = "Subtitulo de la card"
   let body = "Contenido de la card" */

  let dataCardsArray = [
    {
      titulo: "titulo 1",
      subtitulo: "subtitulo 1",
      body: "body 1"
    },
    {
      titulo: "titulo 2",
      subtitulo: "subtitulo 2",
      body: "body 2"
    },
    {
      titulo: "titulo 3",
      subtitulo: "subtitulo 3",
      body: "body 3"
    },
    {
      titulo: "titulo 4",
      subtitulo: "subtitulo 4",
      body: "body 4"
    }

  ]

  return (
    <div className="App">
      <span>Hola mundo reactjs</span>
      {
        dataCardsArray.map((dataCard) =>
          <CardPrime  title={dataCard.titulo} subtitle={dataCard.subtitulo} body={dataCard.body}
            imagen="">
          </CardPrime>
        )
      }
    </div>
  );
}

export default App;
