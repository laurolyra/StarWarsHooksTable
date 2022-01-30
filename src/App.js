import React from "react";
import Table from "./components/Table";
import SWProvider from "./context/SWProvider";
import "./App.css";

function App() {
  return (
    <SWProvider>
      <div className="App">
        <h1 data-testid="welcome">
          Star Wars Data Table: a Context/Hooks Saga!
        </h1>
        <p>
          Feel free to read the{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/laurolyra/StarWarsHooksTable"
          >
            Docs
          </a>
        </p>
        <Table />
      </div>
    </SWProvider>
  );
}

export default App;
