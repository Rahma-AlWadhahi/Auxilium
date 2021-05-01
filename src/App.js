import "./App.css";
import LandingPage from "./Components/LandingPage/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute component={Login} path="/login" exact />
          <PublicRoute component={Signup} path="/signup" exact />
          <PublicRoute component={LandingPage} path="/" exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
