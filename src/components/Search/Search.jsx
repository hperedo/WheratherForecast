import "./Search.scss";
import { useContext, useState } from "react";
// import App from "../../App";
import { WeatherContext } from "../WeatherContext/WeatherContext";


export const Search = () => {
  const [location, setLocation] = useState("");
  const { current, setCurrent } = useContext(WeatherContext);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fae7e17cffmshfe1bf38c1758f13p18b128jsnace168f82467",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const handleFetch = () => {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=7`,
      options
    )
      .then((response) => response.json())
      .then((current) => {
        setCurrent(current);
        console.log(current);
        setLocation("");
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            handleFetch();
          }}
        ></button>
      </form>
         </div>
  );
};
