import { useContext } from "react"
import { Link } from "react-router-dom"
import { StudentContext } from "../context/StudentContext"

function Navbar() {
  const { favourites } = useContext(StudentContext)

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <h1 className="text-xl font-bold"> Students App</h1>

        <div className="flex gap-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:bg-indigo-500 font-medium"
          >
            Student List
          </Link>
          <Link
            to="/favourites"
            className="px-4 py-2 rounded-lg hover:bg-indigo-500 font-medium"
          >
            Favourites ({favourites.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
