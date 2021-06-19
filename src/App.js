import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import AboutComponent from './components/About';
import HomeComponent from './components/Home';
import WorkComponent from './components/Work';
import ContactComponent from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Drawer>
      <Switch>
        <Route path='/about' component={AboutComponent} />
        <Route path='/work' component={WorkComponent} />
        <Route path='/contact' component={ContactComponent} />
        <Route path='/' component={HomeComponent} />
      </Switch>
      <Footer />
    </Drawer>
  );
};

export default App;
