import React from "react";
import "./App.css";
import KanbanBoard from "./Components/KanbanBoard";
import SidePanel from "./Components/SidePanel";
import Header from "./Components/Header";


const App = () => {
  return (
    <div className="app">
      <Header/>
      <KanbanBoard/>
      <SidePanel/>
    </div>
  );
};

export default App;


