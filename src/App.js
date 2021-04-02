import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Tickets from "./Tickets";
import Contacts from "./Contacts";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("My Dashboard");
  const handleClick = (newTitle) => {
    setTitle(newTitle);
  };
  return (
    <Router>
      <div className="app">
        <Sidebar handleClick={handleClick}></Sidebar>
        <div className="app-content p-0">
          <Topbar title={title}></Topbar>
          <Switch>
            <Route path="/tickets" component={Tickets} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
