import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="font-Noto h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"/>
          <Route path="/user"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;