import { MovieCard } from "./MovieCard";
export const MovieList = ({ list, searchString, rateValue }) => {
  return (
    <div className="movielist">
      {list
        .filter(({ rating }) => rating >= rateValue)
        .filter(({ title }) => title.toLowerCase().includes(searchString))
        .map(({id, title, slug,description, rating, posterURL }, i) => (
          <MovieCard
            key={i}
            title={title}
            description={description}
            rating={rating}
            posterURL={posterURL}
            id={id}
            slug={slug}
          />
        ))}
    </div>
  );
};
