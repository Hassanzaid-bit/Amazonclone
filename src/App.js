import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Selection from './components/Selection/Selection';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  
  return( <div className="app">
            <Router>
              <Switch>
                <Route path = '/'>          
                  <Header/>
                  <Home>
                  <Product/>
                  </Home>
                
                </Route>
              </Switch>
            </Router>
          </div> )
}

export default App;
