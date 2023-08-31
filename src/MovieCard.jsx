import React from 'react';
const MovieCard = ({movie}) => {
    return (
        <div className='col-lg-2 col-md-4 col-sm-6 col-6 mb-3'>
            <div className='card'>
                <div className='card-body'>
                    <img className='card-img-top' src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="movie poster" />
                    <span className='badge bg-secondary'>{movie.Type}</span>
                    <h6 className='card-title'>
                        { movie.Title}
                    </h6>
                    <p>{movie.Year}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;