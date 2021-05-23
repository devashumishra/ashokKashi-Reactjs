import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Advertise from './Components/Advertise';
import Login from './Components/Login';
import Slider from './Components/Slider';





function App() {
  return (
    <div className="Home">
      <header>
      <Header/>

      <main id="fs-main" className="fs-content">   
         <BrowserRouter> <Switch>
            <Route exact path="/">
              <Home />
              </Route>
              <Route exact path="/Home">
              <Home />
              </Route>
              <Route exact path="/Slider" >
              <Slider />
              </Route>
              <Route exact path="/Content" >
              <Content />
              </Route>
              <Route exact path="/Login" >
              <Login />
              </Route>
              </Switch>
              </BrowserRouter>
              <Footer/>
              </main>
              </header>
              </div>
 );
}

export default App;
