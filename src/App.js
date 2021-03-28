import './App.css';
import { Card, CardWrapper } from 'react-swipeable-cards';
import {useState, useEffect} from 'react';
import {Typography} from '@material-ui/core';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import useStyles from './styles'

function App() {

  // object constant to hold all my styles created in ./style.js 
  
  const classes = useStyles()
  
  // cards states and setCards to access the cards and change its state anytime

  const[cards, setCards] = useState([]);

  // useEffect to change the state of cards array after the cards are fetched
  useEffect(()=>{
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setCards(cardsFromServer.slice(0,10))
      return;
    }
    getCards();
  })

  //function to fetch photos on https://jsonplaceholder.typicode.com/photos and return data
  const fetchCards = async ()=>{

    // try and catch brock to fetch the cards and catch error anytime they are thrown
    try{
      const res =  await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await res.json()
      return data
    }catch(error){
      console.log(error.message)
    }
  }

  // function to detect card double tap and show  like button

  const onDoubleTap = (e)=>{
    console.log("wokring")
    console.log(e)
  }
  return (
    <div className={classes.container}>
      <Typography variant="h4" align='center' color='primary' gutterBottom> Tinder like swipper cards</Typography>
      <CardWrapper>
        {cards.map((card) => (
          <Card key={card.id} onDoubleTap={onDoubleTap}>
            <Typography variant="h6" size='4' align='center'>{card.title}</Typography>
            <img src={card.thumbnailUrl} alt=""/>
            <ThumbUpAltRoundedIcon className={classes.ThumbIcon} fontSize='large' color='primary' id="thumbIcon"></ThumbUpAltRoundedIcon>
          </Card>
        ))}
      </CardWrapper>
    </div>
  );
}

export default App;
