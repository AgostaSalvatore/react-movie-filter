import React from 'react'
import { useState, useEffect } from 'react'

const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

const App = () => {
  const [search, setSearch] = useState('')
  const [filteredFilms, setFilteredFilms] = useState([])

  useEffect(() => {
    console.log('search modificato');
    const filteredFilms = films.filter((film) => film.genre === search)
    setFilteredFilms(filteredFilms)
  }, [search])
  return (
    <div className="container">
      <h1 className='mb-4'>Lista Film</h1>
      <select className="form-select mb-4" value={search} onChange={(e) => setSearch(e.target.value)}>
        {films.map((film) => (
          <option key={film.id} value={film.genre}>{film.genre}</option>
        ))}
      </select>
      <ul className="list-group mb-4">
        {filteredFilms.map((film) => (
          <li key={film.id} className="list-group-item">
            <p><b>Titolo:</b> {film.title}</p>
            <p><b>Genere:</b> {film.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App