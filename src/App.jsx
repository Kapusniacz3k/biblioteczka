import { useEffect, useState } from 'react'
import MovieList from './MovieList.jsx'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    setMovies(['Shrek', 'Król Lew', 'Toy Story'])
  }, [])

  function addMovie() {
    const movieTitle = title.trim()
    if (movieTitle === '') return

    setMovies([...movies, movieTitle])
    setTitle('')
  }

  return (
    <section id="center">
      <h1>Biblioteczka filmów</h1>
      <MovieList movies={movies} />
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="counter" onClick={addMovie}>Dodaj film</button>
    </section>
  )
}

export default App
