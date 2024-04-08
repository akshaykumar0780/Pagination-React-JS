import { useState, useEffect } from "react";
import ReactPagination from "./Pagination";
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="wrapData">
        <ReactPagination />
      </div>
    </div>
  );
}

export default App;
