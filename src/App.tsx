import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/home";
import { UserPage } from "./pages/user";
import { LoginPage } from "./pages/login";
import { Companies } from "./pages/companies";
import { Schools } from "./pages/schools";

function App() {
  return (
    <div className="font-Noto h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/user/:id" element={<UserPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/companies" element={<Companies />}/>
          <Route path="/schools" element={<Schools />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;