import axios from 'axios'

const API_URL = process.env.REACT_APP_DOG_API_URL
const API_KEY = process.env.REACT_APP_DOG_API_KEY

/*
 * endpoint: represents the endpoint to call
 * params: represents an extra parameters
 */
const callApi = async (endpoint, params = null) => {
  const requestConfiguration = {
    baseURL: API_URL,
    header: {
      'x-api-key': API_KEY,
    },
    endpoint,
  }

  if (params) requestConfiguration.params = params

  try {
    return await axios(requestConfiguration)
  } catch (error) {
    console.log('Axios encountered an error', error)
  }
}

export const fetchBreeds = async (page, count = 10) => {
  const breeds = await callApi('breeds', {
    limit: count,
    page,
  })
  return {
    breeds: breeds.data,
    totalBreeds: breeds.headers['pagination-count'],
  }
}

export const fetchPictures = async (breed = '', count = 20) => {
  // if no breed provides, don't call the api (unecessary call)
  if (!breed) {
    return []
  }
  const pictures = await callApi('images/search', {
    breed_id: breed,
    limit: count,
  })

  return pictures.data
}
