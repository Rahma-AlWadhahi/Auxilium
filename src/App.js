import "./App.css";
import LandingPage from "./Components/LandingPage/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute component={LandingPage} path="/" exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
