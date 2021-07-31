import './Product.css';
import data from './data.js';
import StarRatings from 'react-star-ratings';

const Product = () => {
    return ( 
        <div>
             <div class="card text-center shadow-2xl flex flex-row product-card">
                { data.map(data => (
                     <div class="card-body items-center">
                         <div className="self-start	text-left mb-4">
                            <h2 class="card-title text-gray-900">{ data.title }</h2> 
                            <p className="text-black font-bold">{data.price}</p>
                            <StarRatings
                                 rating={data.rating}
                                 starRatedColor="orange"
                                 starDimension="20px"
                                 starSpacing="5px"></StarRatings>

                         </div>  
                         <img src={data.image} alt=""  />
                         <div class="justify-center card-actions">
                         <button class="btn btn-wide btn-sm bg-yellow-500 hover:bg-yellow-500">Add to Basket</button> 
                         </div>
                    </div>
                )) } 
            </div>    
          
        </div>
       
              
           
        

     );
}
 
export default Product;