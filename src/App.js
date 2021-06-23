import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import AboutComponent from './components/About';
import WorkComponent from './components/Work';
import ContactComponent from './components/Contact';
import ResumeComponent from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Drawer>
      <Switch>
        <Route path='/' component={AboutComponent} />
        <Route path='/about' component={AboutComponent} />
        <Route path='/portfolio' component={WorkComponent} />
        <Route path='/contact' component={ContactComponent} />
        <Route path='/resume' component={ResumeComponent} />

      </Switch>
      <Footer />
    </Drawer>
  );
};

export default App;
