import axios from 'axios';
import React, {useState, useEffect} from 'react';

const UseEffectExpl = () => {

    const apiBaseUrl = "https://dog.ceo/api/breeds/image/random/"
    const [dogImageUrls, setDogImageUrls] = useState([])
    const [imageLoading, setImageLoading] = useState(false)

    const loadDogImages = () => {
        const numberImg = Math.floor(Math.random() * 10)
        axios.get(`${apiBaseUrl}${numberImg}`)
        .then(response => setDogImageUrls(response.data.message))
        .catch(error => console.error(error))
    }

    // Behave like "ComponentDidMount" method
    useEffect(() => {loadDogImages()}, []) // TRICK: This will executed only once the component is mounted

    useEffect(() => {
        if(imageLoading){
            loadDogImages()
            setImageLoading(false)
        }
    }, [imageLoading]) // The anonymous method will be executed when the value into array change

    return <>
    <div className="container">
        <h1>Load some random dog images</h1>
        <button onClick={() => setImageLoading(true)}>Load images</button>
        <p>
            {dogImageUrls.length <= 0 ? '...loading' : `${dogImageUrls.length} images of dogs retrieved`}
        </p>
        <div className="dog-pic" style={{display: 'flex', flexDirection: 'row'}}>
            {dogImageUrls && dogImageUrls.map(url => <img style={{width: '100px', height: '100px', margin: '4px'}} key={url} src={url} alt='a dog picture here!' />)}
        </div>
    </div>
    </>
}

export default UseEffectExpl