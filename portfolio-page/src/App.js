import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import About from './components/About';
import Connect from './components/Connect';
import Projects from './components/Projects';

function App() {
  return (
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
  );
}

export default App;
