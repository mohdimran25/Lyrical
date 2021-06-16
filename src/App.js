import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import Footer from './components/layout/Footer'
import {Provider} from './Context';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component= {Index}/>
              <Route exact path="/lyrics/track/:id" component= {Lyrics}/>
            </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
