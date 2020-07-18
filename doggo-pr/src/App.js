import React from 'react';
import Nav from './components/nav/Nav'
import Home from './pages/home/Home';

import Brand from './components/brand/Brand.js';
import Footer from './components/footer/Footer';
import Store from "./pages/store/Store.js";
import Contact from "./pages/contact/Contact.js"
import { BrowserRouter  as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
  //   <div>
  //     <Nav></Nav>
  // <Parallax></Parallax>
  //   <Brand></Brand>
  //   <Footer></Footer>
  //   </div>

<Router >
      <div>
        <Nav />

        <Switch>

          <Route path="/" exact>
         
          <Home></Home>
          <Brand></Brand>
  
          </Route>

          <Route path="/store" exact>
            <Store />
          </Route>

          <Route path="/contact" exact>
            <Contact> </Contact>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>


  )
}

export default App;
