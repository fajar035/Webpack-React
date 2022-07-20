import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilmApi } from "../utils/films";
import "../styles/detail.css";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { characters, planets, species, starships, vehicles } = film;

  const goBack = () => {
    navigate(-1);
  };

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
          <div className="container-wrap">
            <div className="back" onClick={goBack}>
              <FontAwesomeIcon icon={faArrowLeft} width={20} height={20} />
            </div>
            <div className="wrapper-proem">
              <h3>introduction</h3>
              <p>{film.opening_crawl}</p>
            </div>
            <div className="wrapper">
              <div className="wrapper-data">
                <div className="value">
                  <p>Title</p>{" "}
                  <FontAwesomeIcon icon={faArrowRight} width={20} height={20} />
                </div>
                <div className="key">
                  <p>{film.title}</p>
                </div>
              </div>

              <div className="wrapper-data">
                <div className="value">
                  <p>Director</p>{" "}
                  <FontAwesomeIcon icon={faArrowRight} width={20} height={20} />
                </div>
                <div className="key">
                  <p>{film.director}</p>
                </div>
              </div>

              <div className="wrapper-data">
                <div className="value">
                  <p>Producer</p>{" "}
                  <FontAwesomeIcon icon={faArrowRight} width={20} height={20} />
                </div>
                <div className="key">
                  <p>{film.producer}</p>
                </div>
              </div>

              <div className="wrapper-data">
                <div className="value">
                  <p>Release</p>{" "}
                  <FontAwesomeIcon icon={faArrowRight} width={20} height={20} />
                </div>
                <div className="key">
                  <p>{film.release_date}</p>
                </div>
              </div>

              <div>
                <div className="key">
                  <nav>
                    <input id="toggle" type="checkbox" defaultChecked />
                    <h2>Characters</h2>
                    <ul>
                      {characters !== undefined &&
                        characters.map((data, idx) => {
                          return (
                            <li key={idx}>
                              <a
                                href={data}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {data}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </nav>
                </div>
              </div>

              <div>
                <div className="key">
                  <nav>
                    <input id="toggle" type="checkbox" defaultChecked />
                    <h2>Planets</h2>
                    <ul>
                      {planets !== undefined &&
                        planets.map((data, idx) => {
                          return (
                            <li key={idx}>
                              <a
                                href={data}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {data}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </nav>
                </div>
              </div>

              <div>
                <div className="key">
                  <nav>
                    <input id="toggle" type="checkbox" defaultChecked />
                    <h2>Species</h2>
                    <ul>
                      {species !== undefined &&
                        species.map((data, idx) => {
                          return (
                            <li key={idx}>
                              <a
                                href={data}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {data}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </nav>
                </div>
              </div>

              <div>
                <div className="key">
                  <nav>
                    <input id="toggle" type="checkbox" defaultChecked />
                    <h2>Starships</h2>
                    <ul>
                      {starships !== undefined &&
                        starships.map((data, idx) => {
                          return (
                            <li key={idx}>
                              <a
                                href={data}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {data}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </nav>
                </div>
              </div>

              <div>
                <div className="key">
                  <nav>
                    <input id="toggle" type="checkbox" defaultChecked />
                    <h2>Vehicles</h2>
                    <ul>
                      {vehicles !== undefined &&
                        vehicles.map((data, idx) => {
                          return (
                            <li key={idx}>
                              <a
                                href={data}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {data}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
