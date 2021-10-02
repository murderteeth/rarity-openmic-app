import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RarityApp, RarityExpansion, configureExpansions, useWeb3 } from 'rarity-react';
import Header from './components/Header';
import Hello from './components/Hello';
import Footer from './components/Footer';
import config from './config.json';
import localExpansions from './localExpansions';
import Prizes from './components/Prizes';

const sideExpansions = [] as RarityExpansion[];
sideExpansions.push(...configureExpansions(config.localExpansions, localExpansions));

function Main() {
  const	{ address, active, connect, walletType } = useWeb3();

  useEffect(() => {
    if(address && !active) {
      connect(walletType.METAMASK);
    }
  }, [address, active]);

  return (
    <div className="app">
      <Router>
        <Header></Header>
        <main>
          <Route path="/prizes">
            <Prizes></Prizes>
          </Route>
          <Route path="/" exact>
            <Hello></Hello>
          </Route>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  );
}

function App() {
  return (
    <RarityApp config={config} sideExpansions={sideExpansions}>
      <Main></Main>
    </RarityApp>
  );
}

export default App;