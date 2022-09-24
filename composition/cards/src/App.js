import './App.css';
import Card from './components/Card';

function App() {
  return (
    <Card
      cardTitle="Card title"
      cardText="Some quick example text to build on the card title and make up the bulk of the card's content.">
      <img src="https://cdn.fishki.net/upload/post/2016/12/02/2153008/chihuahua-na-lugu.jpg" className="card-img-top" alt=""/>
    </Card>
  );
}

export default App;
