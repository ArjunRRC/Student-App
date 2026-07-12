import { createContext, useState } from "react"

export const StudentContext = createContext()

const initialStudents = [
  { id: 101, name: "Arjun" },
  { id: 102, name: "Priya" },
  { id: 103, name: "Karthik" },
  { id: 104, name: "Meena" },
  { id: 105, name: "Ravi" },
  { id: 106, name: "Divya" },
];


export function StudentProvider({ children }) {
  const [students, setStudents] = useState(initialStudents)
  const [favourites, setFavourites] = useState([])

  function addStudent(name, id) {
    const alreadyExists = students.some((student) => student.id === id)
    if (alreadyExists) {
      return false
    }
    setStudents([...students, { id, name }])
    return true;
  }

  function addToFavourites(student) {
    const alreadyAdded = favourites.some((fav) => fav.id === student.id)
    if (!alreadyAdded) {
      setFavourites([...favourites, student])
    }
  }

  function removeFromFavourites(id) {
    setFavourites(favourites.filter((fav) => fav.id !== id))
  }

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addStudent,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
