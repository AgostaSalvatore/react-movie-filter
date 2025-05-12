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
      <h1>Lista Film</h1>
    </div>
  )
}

export default App