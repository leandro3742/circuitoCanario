import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home';

import FormPlayer from './views/FormPlayer';
import Managment from './views/Managment';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/formPlayer" exact component={FormPlayer} />
              <Route path="/managment" exact component={Managment} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
