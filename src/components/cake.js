import cakeInformation from "../components/cakesInformation";

const Cake = ({title, cake}) => {
const Ingredients = cake.ingredients.join(', ');
const Rating = cake.rating;

    return ( 
        <>
        <h3>{title} <span>Rating: {Rating}</span></h3>
        <p>Price/pc: {cake.price}£ ⎯ <span> Ingredient List: {Ingredients}</span></p>
        </>
     );
}
 
export default Cake;