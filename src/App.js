import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { AppContext } from "./libs/ContextLib";
import Bubble from './componenets/BubbleChart';
import LandingPage from './componenets/LandingPage';

function App() {
  // const [landing, setLandingStatus] = useState(true)
  // useEffect(()=>{
  //   console.log("State Changed in App.js");
  // });

  // function changeLandingState()
  // {
  //   setLandingStatus(!landing);
  // }
  return (
    <div className="App">
        <Router >
           <Switch>
             <Route path="/" exact>
               {/* {landing ? 
               <AppContext.Provider value={{landing}}> */}
               <LandingPage />
               {/* </AppContext.Provider> :""
               } */}
              </Route>
           </Switch>
        </Router>
    </div>
  );
}

export default App;
