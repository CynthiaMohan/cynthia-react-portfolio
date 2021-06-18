import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import AboutComponent from './components/About';

function App() {
  return (
    <Drawer>
      <Switch>
        <Route path='/about' component={AboutComponent} />

      </Switch>
    </Drawer>
  );
};

export default App;
