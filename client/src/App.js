import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { getPosts } from './actions/posts';

//import components
import QuotesPage from "./components/quotesPage";
import LoginPage from "./components/loginPage";

function App() {
  //initialize state variables
  const [createTheUser, setCreateTheUser] = useState({
    name: "",
    email: "",
    password: "",
    company_name: "",
    company_street: "",
    company_city: "",
    company_zipcode: "",
  });

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
}, [dispatch])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage
            createTheUser={createTheUser}
            setCreateTheUser={setCreateTheUser}
            user={user}
            setUser={setUser}
          />
        </Route>

        <Route path="/quotes">
          <QuotesPage/>
        </Route>
      </Switch>
    </Router>
    // <div className="App">
    //   <QuotesPage/>
    // </div>
  );
}

export default App;
