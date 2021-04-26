import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Itstaffingsolution from './pages/Itstaffingsolution/itstaffing';
import Itcounsultingsolutions from './pages/Itcounsultingsolutions/Itcounsulting'
import Products from './pages/Products/Products';
import Career from './pages/career/career';
import Company from './pages/company/company';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Itstaffing' component={Itstaffingsolution} />
        <Route path='/Itcounsulting' component={Itcounsultingsolutions} />
        <Route path='/products' component={Products} />
        <Route path='/career' component={Career} />
        <Route path='/company' component={Company} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
