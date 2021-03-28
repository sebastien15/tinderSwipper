import './App.css';
import { Card, CardWrapper } from 'react-swipeable-cards';
import {useState, useEffect} from 'react';
import {Typography} from '@material-ui/core';

function App() {
  const startIndex =0;
  const endIndex =10;
  const[cards, setCards] = useState([]);
  useEffect(()=>{
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setCards(cardsFromServer.slice([startIndex],[endIndex]))
      return;
    }
    getCards();
  })
  const fetchCards = async ()=>{
    try{
      const res =  await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await res.json()
      return data
    }catch(error){
      console.log(error.message)
    }
  }
  const onDoubleTap = (data)=>{
    alert('liked')
  }
  return (
    <div className="App">
      <CardWrapper>
        {cards.map((card) => (
          <Card key={card.id} onDoubleTap={onDoubleTap}>
            <Typography variant="h1">card.title}</Typography>
            <img src={card.thumbnailUrl} alt=""/>
          </Card>
        ))}
      </CardWrapper>
    </div>
  );
}

export default App;
