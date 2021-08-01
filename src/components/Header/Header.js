import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import AmazonLogo from './amazon-logo-transparent.png'


const Header = () => {
    return ( 
       
        <div class="navbar  shadow-lg bg-neutral flex justify-around">
            <div class="">
                <img className="logo w-24" src={AmazonLogo} alt="" />
            </div> 

            <div class=" ">  
                <div class="" >
                    <div class="form-control">
                        <div class="relative">
                            <input type="text" placeholder="Search" class="w-full pr-16 input text-gray-800 font-semibold h-8"/> 
                            <button class="search-button absolute right-0 top-0 rounded-l-none btn h-8 min-h-0"> <SearchIcon></SearchIcon> </button>               
                        </div>      
                    </div>
                </div>
            </div>

        
           
            <div className="flex justify-between">
                <p className="text-gray-100 mr-2">Hello Hassan <br/> <span className="font-bold">  <a className="text-gray-300 ">Sign out</a></span> </p> 
                <p className="text-gray-100 ">Returns and <br/> <span className="font-bold">  <a className="text-gray-300 ">Orders</a></span> </p> 

                <div className="ml-3" >
                <ShoppingBasketIcon></ShoppingBasketIcon>
                <span>0</span>
            </div>  
            </div>
               
                                     
</div>

    );
}
 
export default Header;