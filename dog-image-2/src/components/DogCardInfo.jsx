import React from 'react';

const DogCardInfo = ({imgUrl, picId}) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image" style={{backgroundImage: `url(${imgUrl})`}}>
                    <img src={imgUrl} alt={`A nice dog`} className="is-sr-only" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <strong>Picture ID</strong> {picId}
                </div>
            </div>
        </div>
    )
}

export default DogCardInfo