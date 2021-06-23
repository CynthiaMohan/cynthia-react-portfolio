import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import AboutComponent from './components/About';
import WorkComponent from './components/Work';
import ContactComponent from './components/Contact';
import ResumeComponent from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter basename='/'>
      <Drawer>
        <Switch>
          <Route path='/about' component={AboutComponent} />
          <Route path='/portfolio' component={WorkComponent} />
          <Route path='/contact' component={ContactComponent} />
          <Route path='/resume' component={ResumeComponent} />
          <Route path='/' component={AboutComponent} />
        </Switch>
        <Footer />
      </Drawer>
    </HashRouter>
  );
};

export default App;
