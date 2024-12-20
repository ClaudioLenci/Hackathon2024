import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/home";
import { UserPage } from "./pages/User";
import { LoginPage } from "./pages/login";
import { Companies } from "./pages/companies";

function App() {
  return (
    <div className="font-Noto h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/user" element={<UserPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/companies" element={<Companies />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;