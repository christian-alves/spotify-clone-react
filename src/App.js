import React from 'react';
import MainPage from './components/MainPage/MainPage'
import SearchPage from './components/SearchPage/SearchPage'
import CollectionPage from './components/CollectionPage/CollectionPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom';  

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage}/>           
            <Route path="/search" component={SearchPage}/> 
            <Route path="/collection" component={CollectionPage}/> 
                      
        </Switch>
    </BrowserRouter>
  );
}

export default App;
