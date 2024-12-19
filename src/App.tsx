import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"/>
        <Route path="/user"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;