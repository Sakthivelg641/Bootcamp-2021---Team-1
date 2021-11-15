import React, { Suspense } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Main from "./Routes/main/components/Main";
// import Login from './Routes/login/components/Login';
// import SignUp from './Routes/login/components/SignUp';
import NotesList from "./Routes/main/components/NotesList";
import Router from "./Router";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  );
  // return (
  //   <div className="App">
  //       <Route exact path = "/" component={Main}/>
  //       {/* <Route exact path = "/sign-up" component={SignUp}/>
  //       <Route exact path = "/login" component={Login}/>  */}
  //       {/* <Route exact path = "/main-note_list" component={NotesList}/>  */}
  //   </div>
  // );
}

export default App;
