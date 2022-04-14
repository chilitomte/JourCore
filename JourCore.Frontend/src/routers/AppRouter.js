import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddJour from "../components/AddJour";
import JourList from "../components/JourList";
import Home from "../components/Home";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/jour" component={JourList}  />
            <Route path="/addjour" component={AddJour} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
