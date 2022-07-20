import React, { useState, useEffect } from "react";
import { getFilmsApi } from "../../utils/films";
import Cards from "../../components/Cards";
import Loading from "../../components/Loading";

function Home() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFilmsApi()
      .then((res) => {
        setIsLoading(false);
        setFilms(res.data.results);
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
      });
  }, []);

  console.log(films);

  return (
    <div className="container">
      <div className="header">
        <h3 className="text-header">List Films</h3>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper-card">
          {films.length !== 0 &&
            films.map((film, idx) => {
              return <Cards key={idx} data={film} id={idx + 1} />;
            })}
        </div>
      )}
    </div>
  );
}

export default Home;
