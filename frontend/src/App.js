import React, { useState } from "react";
import "./App.css";
import {
  Header,
  Footer,
  LandingPage,
  MyNotes,
  SignInPage,
  SignUpPage,
  CreateNote,
  UpdateNote,
} from "./components";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route
          path="/mynotes"
          component={() => <MyNotes search={search} />}
          exact
        />
        <Route path="/createnote" component={CreateNote} exact />
        <Route path="/updatenote/:id" component={UpdateNote} exact />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
