import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navigator from "./components/Navbar";
import ChampionList from "./components/champion/ChampionList";
import ItemList from "./components/item/ItemList";
import ChampionDetail from "./components/champion/ChampionDetail";

function App() {
  return (
    <div className="App">
    <Router>
      <Navigator/>
      <Switch>
        <Route path="/" exact component={ChampionList}/>
        <Route path="/items" component={ItemList}/>
        <Route path="/champions/:championID" component={ChampionDetail}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
