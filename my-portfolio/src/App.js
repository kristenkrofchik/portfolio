import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import './App.css';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import About from './components/About';
import Connect from './components/Connect';
import Projects from './components/Projects';

const theme = {
  global: {
    colors: {
      brand: '#00337E',
    },
    font: {
      family: 'DM Sans',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/connect' component={Connect} />
              <Route path='*' component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
    </Grommet>
  );
}

export default App;
