import React, { useEffect, useState } from 'react'
import DogImageCard from './DogImageCard'

const loadDogPictures = async (picNumber = 8) => {
  const apiBaseUrl = 'https://dog.ceo/api/breeds/image/random/'
  const response = await fetch(`${apiBaseUrl}${picNumber}`)
  const data = await response.json()

  const dogData = data.message.map((item) => {
    let breed = item.replace('https://', '').split('/')[2]

    if (breed && breed !== '') {
      breed = breed.split('-').reverse().join(' ')
    }

    return {
      id: `doc_pic_${data.message.indexOf(item)}`,
      imgUrl: item,
      breed,
    }
  })

  return dogData
}

function App() {
  const [dogPictures, setDogPictures] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [numOfDogs, setNumOfDogs] = useState('')
  const [totalSearch, setTotalSearch] = useState(0)

  const handleFormSubmit = async (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    setDogPictures(await loadDogPictures(numOfDogs))
    setIsLoading(false)
  }

  useEffect(() => {
    setTotalSearch((totalDogs) => totalDogs + dogPictures.length)
  }, [dogPictures])

  useEffect(() => {
    // Self executing anonymous function
    ;(async () => {
      setIsLoading((loading) => !loading)
      const dogPictureDate = await loadDogPictures()
      setDogPictures((dataArray) => [...dogPictureDate])
      setIsLoading((loading) => !loading)
    })()
  }, [])

  return (
    <div className="container">
      <header className="columns section has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title is-size-3">Search for Dog pictures</h1>
          <form className="form" onSubmit={handleFormSubmit}>
            <div className="field has-addons has-addons-centered">
              <div className="control is-expanded">
                <input
                  type="text"
                  className="input is-medium"
                  placeholder="How many dogs should we look for (max: 50)"
                  value={numOfDogs}
                  onChange={(evt) => setNumOfDogs(evt.target.value)}
                />
              </div>
              <div className="control">
                <button className="button is-primary is-medium">
                  <span className="icon is-small">
                    <i className="fas fa-search"></i>
                  </span>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </header>
      <div className="has-text-centered">
        <h3 className="subtitle is-size-5">
          All time puppets found: {totalSearch}
        </h3>
      </div>
      <div className="columns section is-multiline">
        {isLoading && (
          <progress className="progress is-medium is-link" max="100">
            65%
          </progress>
        )}
        {!isLoading &&
          dogPictures.map((pic) => (
            <div className="column is-one-quarter" key={pic.id}>
              <DogImageCard imgUrl={pic.imgUrl} breed={pic.breed} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
