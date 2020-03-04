import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainNavigation from './components/shared/Navigation/MainNavigation';
import PhoneList from './views/PhoneList';
import PhoneDetails from './views/PhoneDetails';
import Contact from './views/Contact';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <PhoneList />
          </Route>

          <Route path="/phones/:phoneId" exact>
            <PhoneDetails />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
