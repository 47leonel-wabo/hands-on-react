import React, { useState, useEffect } from 'react'
import { fetchPictures } from './lib/api'
import BreedsList from './components/BreedsList'
import DogCardInfo from './components/DogCardInfo'
import './App.css'

function App() {
  const [pictures, setPictures] = useState([])
  const [selectedBreedId, setSelectedBreedId] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadPictures = async () => {
      if (selectedBreedId !== '') {
        setIsLoading((loading) => !loading)
        const picutresData = await fetchPictures(selectedBreedId, 20)
        setPictures(picutresData)
        setIsLoading((loading) => !loading)
      }
    }

    loadPictures()
  }, [selectedBreedId])

  return (
    <div className="container">
      <header className="section has-text-centered">
        <h1 className="title is-size-3 has-text-primary">
          Search for Dog pictures
        </h1>
        <p>Filter by breeds for more choices</p>
      </header>
      <div className="columns section is-multiline">
        <div className="column is-one-quarter">
          <h2 className="title is-size-4 has-text-info">Search by breed</h2>
          <BreedsList
            dispatchBreedChange={(breedId) => setSelectedBreedId(breedId)}
          />
        </div>
        <div className="column">
          <div className="columns is-multiline">
            {isLoading && (
              <progress className="progress is-medium is-link" max="100">
                68%
              </progress>
            )}
            {!isLoading &&
              pictures.map((picture) => (
                <div className="column is-one-quarter" key={picture.id}>
                  <DogCardInfo imgUrl={picture.url} picId={picture.id} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
