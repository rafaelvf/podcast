import { Route, BrowserRouter as  Router } from 'react-router-dom';
import './App.css';
import Container from './components/Container.js';


function App() {
  return (
    <Router>

    <Route  path="/" component={Container} />   
    

    </Router>
    
  );
}

export default App;
