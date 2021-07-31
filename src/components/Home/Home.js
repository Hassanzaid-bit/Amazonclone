import './Home.css';
import MenuIcon from '@material-ui/icons/Menu';

const Home = () => {
    return ( 
    <div className="home"> 
        <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content bottom-links">
            <div class="flex-none">
                <button class="btn btn-square btn-ghost w-20">
                <MenuIcon></MenuIcon>
                All
                </button>
            </div> 
            <div class="flex-1 px-2 mx-2 mr-4">
                <span class="text-lg font-bold">
                    Today's Deals
                </span>
                <span class="text-lg font-bold mr-4">
                    Customer Service
                </span>
                <span class="text-lg font-bold mr-4">
                    Sell
                </span>
                <span class="text-lg font-bold mr-4">
                    Register
                </span>
            </div> 
        </div>

    </div> );
}
 
export default Home;