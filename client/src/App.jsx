import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainNavigation from './components/shared/Navigation/MainNavigation';
import PhonesCatalogue from './views/PhoneCatalogue';
import PhoneDetails from './views/PhoneDetails';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainNavigation />
        <main>
          <Route path="/phones" exact>
            <PhonesCatalogue />
          </Route>
          <Route path="/phones/:phoneId" exact>
            <PhoneDetails />
          </Route>

          <Redirect to="/phones" />
        </main>
      </Router>
    </Provider>
  );
};

export default App;
