import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/home';
import Faq from './pages/faq';
import Presale from './pages/presale';
import Team from './pages/team';
import Register from './pages/register';
import Airdrops from './pages/airdrops';
import Bounties from './pages/bounties';
import Contests from './pages/contests';
import Whitepaper from './pages/whitepaper';
import PrivacyPolicy from './pages/privacypolicy';

// Import Global Components
import Header from './components/_navigation/header';
import Footer from './components/_navigation/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/home" component={Home} />
          <Route exact path="/PEcTIOnOSequieceStre" component={Presale} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/airdrops" component={Airdrops} />
          <Route exact path="/bounties" component={Bounties} />
          <Route exact path="/contests" component={Contests} />
          <Route exact path="/whitepaper" component={Whitepaper} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
