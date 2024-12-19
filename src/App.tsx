import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/home";

function App() {
  return (
    <div className="font-Noto h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/user"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;