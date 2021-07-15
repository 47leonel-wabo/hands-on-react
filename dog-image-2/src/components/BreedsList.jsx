import React, {useState, useEffect} from 'react';
import {fetchBreeds} from '../lib/api'

const BreedsList = ({dispatchBreedChange}) => {

    const [value, setValue] = useState('')
    const [breeds, setBreeds] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const handleChange = evt => {
        const v = evt.target.value
        setValue(v)
        if(dispatchBreedChange){
            // Inform the parent component that something has changed
            dispatchBreedChange(v)
        }
    }

    const handlePageClick = pageNum => {
        if(pageNum < 0 || pageNum >= totalPages) return
        setCurrentPage(pageNum)
    }

    useEffect(() => {

        const loadBreeds = async () => {
            setIsLoading(loading => !loading)
            const breedData = await fetchBreeds(currentPage, 12)
            setBreeds(breedData.breeds)
            setTotalPages(parseInt(Math.ceil(breedData.totalBreeds/15), 10))
            setIsLoading(loading => !loading)
        }

        loadBreeds()
    }, [currentPage])

    return (
        <>
            {
                isLoading && (<progress className="progress is-medium is-link" max='100'>68%</progress>)
            }
            {!isLoading && (
                <>
                    <div className="field breed-list">
                        <div className="control">
                            {
                                breeds.map(breed => (
                                    <label className='radio' key={breed.id}>
                                        <input 
                                        type="radio" 
                                        name='breed' 
                                        value={breed.id} 
                                        checked={value === breed.id.toString()}
                                        onChange={handleChange}/>
                                        {breed.name}
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                    <br />
                    <nav className="pagination is-rounded" aria-label='pagination'>
                        <a
                        className="pagination-previous" 
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage <= 0}
                        >
                            Previous
                        </a>
                        <a
                        className="pagination-previous" 
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={currentPage + 1 >= totalPages}
                        >
                            Next
                        </a>
                    </nav>
                </>
            )}
        </>
    )
}

export default BreedsList