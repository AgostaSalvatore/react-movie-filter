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
  return (
    <div className="container">
      <h1 className='mb-4'>Lista Film</h1>
      <ul className="list-group mb-4">
        {films.map((film) => (
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