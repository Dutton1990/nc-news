import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Articles from './components/Articles'
import Article from './components/Article'

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Articles />
        </Route>
        <Route exact path="/topics/:topic">
          <Articles />
        </Route>
        <Route exact path="/articles/:article_id">
          <Article />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
