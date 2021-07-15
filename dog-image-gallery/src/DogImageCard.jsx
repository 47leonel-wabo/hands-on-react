import React from 'react';

const DogImageCard = props => {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <figure 
                    className="image is-4by3" 
                    style={{backgroundImage: `url(${props.imgUrl})`}}
                    >
                    <img src={props.imgUrl} alt={`A ${props.breed} dob`} className="is-sr-only"/>
                    </figure>
                </div>
                <div className="content">
                    <strong>Breed: </strong>{props.breed}
                </div>
            </div> 
        </>
    )
}

export default DogImageCard