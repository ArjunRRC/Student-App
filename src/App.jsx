import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import StudentList from "./pages/StudentList"
import Favourites from "./pages/Favourites"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App
