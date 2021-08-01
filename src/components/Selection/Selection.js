import './Selection.css';
import SelectionData from './data';

const Selection = () => {
    return ( 
        <div className="flex justify-around relative top-48">  
            {SelectionData.map(data => {
               return(
               <div class="card bordered w-48 h-80 justify-between p-4 bg-white">
                    <h2 class="card-title h-11">
                        <div class="mx-2 text-base text-black">{data.title}</div>
                    </h2> 
                    <figure>
                        <img src={data.image} alt=""/>
                    </figure> 
                    <div class="my-0">
                        <div class="justify-start card-actions">
                        <a href={data.route} className="text-blue-500">Shop Now</a>
                        </div>
                    </div>
             </div> )
            })}
        </div> 
     );
}
 
export default Selection;