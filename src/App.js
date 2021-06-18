import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import AboutComponent from './components/About';
import HomeComponent from './components/Home';
import WorkComponent from './components/Work';
import ContactComponent from './components/Contact';

function App() {
  return (
    <Drawer>
      <Switch>
        <Route path='/about' component={AboutComponent} />
        <Route path='/work' component={WorkComponent} />
        <Route path='/contact' component={ContactComponent} />
        <Route path='/' component={HomeComponent} />
      </Switch>
    </Drawer>
  );
};

export default App;
