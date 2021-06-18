import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import AboutComponent from './components/About';
import HomeComponent from './components/Home';


function App() {
  return (
    <Drawer>
      <Switch>
        <Route path='/about' component={AboutComponent} />
        <Route path='/' component={HomeComponent} />
      </Switch>
    </Drawer>
  );
};

export default App;
