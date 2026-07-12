import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"

function Favourites() {
  const { favourites, removeFromFavourites } = useContext(StudentContext)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Favourite Students
      </h2>

      {favourites.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center">
          <p className="text-gray-500 text-lg">
            No favourite students added yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {favourites.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow p-5 flex items-center justify-between"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {student.name}
                </p>
                <p className="text-sm text-gray-500">Roll No: {student.id}</p>
              </div>

              <button
                onClick={() => removeFromFavourites(student.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites
