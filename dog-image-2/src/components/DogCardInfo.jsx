import React from 'react';

const DogCardInfo = props => {
    return (<>
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3" style={{backgroundImage: `url(${props.imgUrl})`}}>
                    <img src={props.imgUrl} alt="" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <strong>Picture ID</strong> {props.picId}
                </div>
            </div>
        </div>
        </>
    )
}

export default DogCardInfo