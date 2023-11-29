import { useState } from "react";
import App from "../App";
import Cake from "../components/cake";
import AverageRating from "../components/averageRating";

const BakeryContainer = () => {



     // create Victoria Sponge const
  const [victoriaSponge, setVictoriaSponge] = useState({
	cakeName: "Victoria Sponge",
   	ingredients: [
   		"eggs",
      	"butter",
      	"sugar",
      	"self-raising flour",
      	"baking powder",
      	"milk"
  	],
  	price: 5,
   	rating: 5
})
    
    // create teaLoaf const
  const [teaLoaf, setTeaLoaf] = useState({
    cakeName: "Tea Loaf",
      ingredients: [
          "eggs",
         "oil",
         "dried fruit",
         "sugar",
         "self-raising flour",
         "strong tea",
     ],
     price: 2,
     rating: 3
})
    // create carrotCake const
  const [carrotCake, setCarrotCake] = useState({
    cakeName: "Carrot Cake",
      ingredients: [
       "carrots",
         "walnuts",
         "oil",
         "cream cheese",
         "flour",
         "sugar",
      ],
      price: 8,
      rating: 5
} )

    const cakeArray = [victoriaSponge, teaLoaf, carrotCake];


return (
        <>
            <h1>Welcome to Tom's <u>React</u><div id="atom">⚛</div><u>Bakery</u></h1>
            <hr></hr>
            <h2>Cakes:</h2>
            <Cake title={'Tea Loaf'} cake={teaLoaf}/>
            <Cake title={'Victoria Sponge'} cake={victoriaSponge}/>
            <Cake title={'Carrot Cake'} cake={carrotCake}/>
            <h2>Average Bakery Rating: <span><AverageRating cakes={cakeArray}/></span> 👨‍🍳</h2>

            

        </>

    );
}

export default BakeryContainer;