import "./Style/App.css";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import List from "./pages/kasu_list_page/List";
import Upload from "./pages/norae_upload_page/Upload";
import Sign_up from "./pages/kasu_sign_up_page/Sign_up";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/signup" element={<Sign_up />} />
      </Routes>
    </div>
  );
}

export default App;
