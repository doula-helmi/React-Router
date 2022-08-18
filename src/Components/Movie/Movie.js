import "./Movie.css";
import Rating from "@mui/material/Rating";
import { useNavigate, useParams } from "react-router-dom";
export const MoviePage = ({ list }) => {
  const { postslug } = useParams();
  const post = list.find((list) => list.slug === postslug);
  const navigate = useNavigate();

  return (
    <>
      <div className="btn-home">
        <button
          style={{ all: "unset", cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="https://icon-library.com/images/141974-200.png"
            width={80}
            height={80}
          />
        </button>
      </div>
      <div className="movie-page">
        <div className="container">
          <img
            style={{ width: "20%", borderRadius: "5px" }}
            src={post.posterURL}
            alt="cover"
            className="cover"
          />

          <div className="details">
            <div className="title2">{post.title}</div>

            <fieldset className="rating">
              <Rating
                name="disabled"
                precision={0.5}
                value={post.rating}
                disabled
              />
            </fieldset>
          </div>
          <div className="description">
            <div className="column">
              <p>{post.description}</p>
            </div>
          </div>
          <iframe
            width="750"
            height="415"
            src={post.trailerLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
