import React, { useState } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import ScrollViewPort from './components/scrollViewPort';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Cursor from './components/cursor';


const App = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <HashRouter>
      <div className="App">
        <Cursor />
        <Header menuState={menuState} setMenuState={setMenuState} />
        <Navbar menuState={menuState} setMenuState={setMenuState} />
        <ScrollViewPort />

        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/#" to="home"/>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
