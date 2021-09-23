import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"

import Home from './components/home/Home';
import Landing from './components/landing/Landing';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        {/* <Route path="/landing/:_id">
            alert('hola hola hola')
          </Route> */}
          <Route path="/landing">
            <Landing/>
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
