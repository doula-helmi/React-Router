import { useState } from "react";
import { useRef } from "react";
import Rating from "@mui/material/Rating";

const AddMovie = ({
  senmoviePosterURL,
  senMoviePostURL,
  sendMovieTitle,
  submitMovie,sendMovieRate
}) => {
  const [rating, setrating] = useState(0);
  console.log(rating)
  const ratingChanged = (event, newValue) => {
    setrating(newValue);
    console.log(newValue)
  };

  const movieTitle = useRef();
  const movieDescription = useRef();
  const moviePosterURL = useRef();


  const hundeltitle = () => {
    sendMovieTitle(movieTitle.current.value);
  };

  const hundelMoviePostUR = () => {
    senMoviePostURL(moviePosterURL.current.value);
  };

  const hundelmovieDescription = () => {
    senmoviePosterURL(movieDescription.current.value);
  };

  


  const hundelClear = () => {
    movieTitle.current.value = "";
    moviePosterURL.current.value = "";
    movieDescription.current.value = "";
    setrating(0);
  };

  return (
    <div className="add-movie">
      <h3 className="movie-title">Add a new movie</h3>
      <div className="movie-content">
        <div className="movie-info">
          <div className="info-section">
            <input
              onChange={hundeltitle}
              ref={movieTitle}
              placeholder="Movie title"
              required
            />
            <input
              onChange={hundelMoviePostUR}
              ref={moviePosterURL}
              placeholder="https://"
              required
            />
            <textarea
              onChange={hundelmovieDescription}
              ref={movieDescription}
              placeholder="Movie description"
              required
            />
          </div>
          <div className="info-section">
            <span onClick={sendMovieRate(rating)}>
              <Rating name="simple-controlled" onChange={ratingChanged} precision={0.5}/>
            </span>
            <p>{rating}</p>

            <button
              onClick={() => {
                submitMovie();
                hundelClear();
              }}
              disabled={rating ? false : true}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
