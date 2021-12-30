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
      brand: '#37118A',
      'accent-1': '#0A0B0F',
      'accent-2': '#FAC500',
      'accent-3': '#9764FC',
      'accent-4': '#FE131D',
      'neutral-1': '#F2F3F7',
    },
    font: {
      family: 'DM Sans',
      size: '18px',
      height: '20px',
    },
    text: {
      dark: 'accent-1',
      light: 'neutral-1',
    },
    background: {
      color: 'accent-1',
    }
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
