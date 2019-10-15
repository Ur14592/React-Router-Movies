import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDom from "react-dom";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      <Route exact path="/" component={MovieList} />

    </div>
      
  );    
};

export default App;
