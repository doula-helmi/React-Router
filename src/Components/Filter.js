import { useRef, useState } from "react";
import Rating from "@mui/material/Rating";
export const Filter = (props) => {
  const FilterByName = useRef();
  const [FiltreBysearch, setFiltreBysearch] = useState("");
  const hundelsearch = () => {
    setFiltreBysearch(FilterByName.current.value);
    props.onSubmit(FilterByName.current.value.toLowerCase());
  };

  return (
    <div className="filter">
      <input
        type={"text"}
        ref={FilterByName}
        onChange={hundelsearch}
        placeholder="Filter by title"
      />
      <Rating
        name="simple-controlled"
        onChange={(e,nv)=> props.onsearch(nv)}
        precision={0.5}
       

      />
    </div>
  );
};
