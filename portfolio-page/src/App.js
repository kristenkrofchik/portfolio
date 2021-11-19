import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import About from './components/About';
import Connect from './components/Connect';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/connect' component={Connect} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
