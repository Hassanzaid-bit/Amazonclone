import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  
  return( <div className="app">
            <Router>
              <Switch>
                <Route path = '/'>
                  <Home/>
                  <Header/>
                </Route>
              </Switch>
            </Router>
          </div> )
}

export default App;
