import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import AmazonLogo from './amazon-logo-transparent.png'


const Header = () => {
    return ( 
       
        <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div class="px-2 mx-2">
                <img className="logo w-36" src={AmazonLogo} alt="" />
            </div> 
            <div class="px-2 mx-2 w-4/5 ">  
                <div class="flex items-stretch w-3/5" >
                    <div class="form-control w-full">
                        <div class="relative">
                            <input type="text" placeholder="Search" class="w-full pr-16 input text-gray-800 font-semibold"/> 
                            <button class="search-button absolute right-0 top-0 rounded-l-none btn btn-primary"> <SearchIcon></SearchIcon> </button>               
                        </div>      
                    </div>
                </div>

                <div className="flex justify-around items-center w-2/5">
                    <div>
                        <p className="text-gray-100 ">Hello Hassan <span className="block">  <a className="text-gray-300 font-bold text-xl">Sign out</a></span> </p>
                       
                    </div>
                    <div>
                        <p className="text-gray-100 ">Return and Orders</p>
                        <a className="text-gray-300 font-bold text-xl">Your Prime</a>
                    </div>
                    <div>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span>0</span>
                    </div>
                </div>
             
            </div> 

           
           
</div>



    );
}
 
export default Header;