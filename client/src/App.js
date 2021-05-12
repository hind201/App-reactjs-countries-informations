 import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from "./Component/Header"
import Home from "./Component/Home"
 import  FilterRegion from "./Component/FilterRegion"
 import FilterLangue from "./Component/FilterLangue"
 import Paye from "./Component/Paye"
import FilterPaye from "./Component/FilterPaye"
// import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
     
        <Router>
        <Header/>
         <Switch> 
        <Route exact path="/">
        <Home/>
       
        </Route>
        
        <Route exact path="/paye/:name"component={Paye}/>
        <Route exact path="/filterPaye" component={FilterPaye}/> 
          <Route exact path="/FilterLangue" component={FilterLangue}/>  
         
           <Route exact path="/filterRegion" component={ FilterRegion}/> 
        
          </Switch>
       

        </Router> 
     </div>
  );
}

export default App;
