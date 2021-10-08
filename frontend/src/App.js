import "./App.css";
import {
  Header,
  Footer,
  LandingPage,
  MyNotes,
  SignInPage,
  SignUpPage,
} from "./components";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/signin" component={SignInPage} exact />
      <Route path="/signup" component={SignUpPage} exact />
      <Route path="/mynotes" component={MyNotes} exact />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
