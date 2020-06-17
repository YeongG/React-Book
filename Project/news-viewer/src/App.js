import React,{useState,useCallback, useEffect} from 'react';
import NewsList from './NewsList';
import Categories from './Categories';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import NewsPage from './NewsPage';

const App = () => {
  return (
    <Router>
      <Route path="/:category?" component={NewsPage} />
    </Router>
  )
}
export default App;
