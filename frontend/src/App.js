import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";
import MyFooter from "./components/MyFooter";
import books from "./data/history.json";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <MyNavBar />
          <Route path="/Welcome" component={Welcome} />
          <Route render={(routerProps) => <LatestReleases {...routerProps} />} path="/" exact />
          <Route render={(routerProps) => <LatestReleases {...routerProps} />} path="/LatestReleases/:id" />
          <MyFooter />
        </Router>
      </div>
    );
  }
}

export default App;
