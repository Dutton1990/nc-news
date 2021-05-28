import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Article from './components/Article';
import { UserContext } from './contexts/user';

function App() {
  const [user] = useState({
    username: 'jessjelly',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false)
  return (
    <UserContext.Provider value={user}>
      <Header />
      <div class="columns is-mobile">
        <Nav isErr={isErr} setIsErr={setIsErr}/>
        <Switch>
          <Route exact path="/">
            <Articles isLoading={isLoading} setIsLoading={setIsLoading} isErr={isErr} setIsErr={setIsErr}/>
          </Route>
          <Route exact path="/topics/:topic">
            <Articles isLoading={isLoading} setIsLoading={setIsLoading} isErr={isErr} setIsErr={setIsErr}/>
          </Route>
          <Route exact path="/articles/:article_id">
            <Article isLoading={isLoading} setIsLoading={setIsLoading} isErr={isErr} setIsErr={setIsErr}/>
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
