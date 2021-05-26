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
  return (
    <>
      <UserContext.Provider value={user}>
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
      </UserContext.Provider>
    </>
  );
}

export default App;
