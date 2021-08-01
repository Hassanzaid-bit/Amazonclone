import './Home.css';
import MenuIcon from '@material-ui/icons/Menu';
import Selection from '../Selection/Selection'

const Home = () => {
    return ( 
    <div className="home"> 
        <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content bottom-links">
            <div class="flex-none">
                <button class="btn btn-square btn-ghost w-20 font-semibold">
                <MenuIcon></MenuIcon>
                <span className="font-semibold"> All</span>
                </button>
            </div> 
            <div class="flex-1 px-2 mx-2 ">
                <span class="text-lg font-semibold mr-4">
                    Today's Deals
                </span>
                <span class="text-lg font-semibold mr-4">
                    Customer Service
                </span>
                <span class="text-lg font-semibold mr-4">
                    Sell
                </span>
                <span class="text-lg font-semibold mr-4">
                    Register
                </span>
            </div> 
        </div>
        <Selection></Selection>

    </div> );
}
 
export default Home;