import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmApi } from "../utils/films";
import "../styles/detail.css";
import Loading from "./Loading";

function Detail() {
  const params = useParams();
  const { id } = params;
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFilmApi(id)
      .then((res) => {
        setFilm(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
      });
  }, []);

  console.log(film);

  return (
    <div className="wrapper-detail">
      <div className="card-detail">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="wrapper-proem">
              <h3>introduction</h3>
              <p>{film.opening_crawl}</p>
            </div>
            <div className="wrapper">
              <div className="wrapper-data">
                <div className="value">
                  <p>Title</p>{" "}
                </div>
                <div className="key">
                  <p>{film.title}</p>
                </div>
              </div>

              <div className="wrapper-data">
                <div className="value">
                  <p>Director</p>{" "}
                </div>
                <div className="key">
                  <p>{film.director}</p>
                </div>
              </div>

              <div className="wrapper-data">
                <div className="value">
                  <p>Director</p>{" "}
                </div>
                <div className="key">
                  <p>{film.director}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Detail;
