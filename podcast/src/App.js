import { Route, BrowserRouter as  Router } from 'react-router-dom';
import './App.css';
import Container from './components/Container.js';
import BlogPost from './components/BlogPost';
import AllPodcasts from './components/AllPodcasts';

function App() {
  return (
    <Router>

    <Route exact path="/" component={Container} />   
    <Route  path="/blog/:ID" component={BlogPost} />
    <Route  path="/podcasts" component={AllPodcasts} />

    </Router>
    
  );
}

export default App;
