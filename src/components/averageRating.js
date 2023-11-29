const AverageRating = ({cakes}) => {
    let ratings = 0;

// classic for loop 
// for (let index = 0; index < cakes.length; index++) {
//         ratings += cakes[index].rating;
//     } 

    cakes.forEach(cake => {
         ratings += cake.rating;  
    });

    ratings = (ratings/cakes.length).toFixed(1)

console.log(ratings/(cakes.length));

return ratings;


}
 
export default AverageRating;