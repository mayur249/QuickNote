import "./App.css";
import { Header, Footer, LandingPage, MyNotes } from "./components";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/mynotes" component={MyNotes} exact />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
