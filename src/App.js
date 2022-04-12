import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Faq from "./components/pages/Faq";
import Home from "./components/pages/Home";
import Roadmap from "./components/pages/Roadmap";
import Services from "./components/pages/Services";

function App() {
  return (
    <div className="App">
      <div className="golbalContainer">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about-us' component={About}></Route>
            <Route path='/services' component={Services}></Route>
            <Route path='/roadmap' component={Roadmap}></Route>
            <Route path='/faq' component={Faq}></Route>
            <Route path='/contact' component={Contact}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
