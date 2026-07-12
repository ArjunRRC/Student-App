import { useContext, useState } from "react"
import { StudentContext } from "../context/StudentContext"

function StudentList() {
  const { students, favourites, addStudent, addToFavourites } =
    useContext(StudentContext);

  const [name, setName] = useState("")
  const [rollNo, setRollNo] = useState("")
  const [error, setError] = useState("")

  function handleAddStudent(e) {
    e.preventDefault()

    const trimmedName = name.trim()
    const trimmedRollNo = rollNo.trim()

    if (!trimmedName || !trimmedRollNo) {
      setError("Please enter both name and roll number.")
      return
    }

    const added = addStudent(trimmedName, Number(trimmedRollNo))
    if (!added) {
      setError("A student with this roll number already exists.")
      return
    }

    setName("")
    setRollNo("")
    setError("")
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

      <form
        onSubmit={handleAddStudent}
        className="bg-white rounded-xl shadow p-5 mb-6 flex flex-col sm:flex-row gap-4 sm:items-end"
      >
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Roll Number
          </label>
          <input
            type="number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Enter roll number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
        >
          Add Student
        </button>
      </form>

      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {students.map((student) => {
          const isFavourite = favourites.some((fav) => fav.id === student.id)

          return (
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
                onClick={() => addToFavourites(student)}
                disabled={isFavourite}
                className={
                  isFavourite
                    ? "bg-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
                    : "bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
                }
              >
                {isFavourite ? "Favorite" : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList
