import "./App.css";
import LandingPage from "./Components/LandingPage/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Alert from "./Components/Alert";
import Loading from "./Components/Loading";
import Home from "./Components/Home";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    alert: state.alert,
  };
};

const App = (props) => {
  return (
    <Router>
      <div className="App">
        {props.loading && <Loading />}
        {props.alert && <Alert />}
        <Switch>
          <PublicRoute component={Login} path="/login" exact />
          <PublicRoute component={Signup} path="/signup" exact />
          <PublicRoute component={LandingPage} path="/" exact />
          <PrivateRoute component={Home} path="/home" exact />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps, null)(App);
