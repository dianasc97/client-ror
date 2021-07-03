import React, { useState, useEffect, useCallback } from "react";
import { useAlert } from "react-alert";
import MoviesService from "../../services/movies";
import MovieCard from "../moviecard";
import "./moviebody.css";
import { AiFillCloseSquare } from "react-icons/ai";

function Moviebody() {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [displayDirector, setDisplayDirector] = useState(false);
  const [directorMovies, setDirectorMovies] = useState();
  const alert = useAlert();

  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [synopsis, setSynopsis] = useState();
  const [director, setDirector] = useState();
  const [grade, setGrade] = useState();
  const [id, setId] = useState();

  const fetchMovies = useCallback(async () => {
    const response = await MoviesService.index(search);
    if (response.data.length >= 1) {
      setMovies(response.data);
    }
  }, [search]);

  const handleDelete = useCallback(
    (id) => {
      MoviesService.delete(id)
        .then(() => {
          alert.success("Filme deletado com sucesso !");
          fetchMovies();
        })
        .catch((e) => alert.error("Ocorreu um erro, tente novamente !"));
    },
    [alert, fetchMovies]
  );

  const handleEdit = useCallback(() => {
    if (parseInt(grade, 10) < 1 || parseInt(grade, 10) > 5) {
      alert.error("São aceitos apenas valores entre 1 e 5 !");
      return;
    }
    const data = {
      name: name,
      year: year,
      synopsis: synopsis,
      director: director,
      grade: parseInt(grade, 10),
    };
    MoviesService.update(data, id)
      .then(() => {
        alert.success("Filme editado com sucesso !");
        setName("");
        setYear("");
        setSynopsis("");
        setDirector("");
        setGrade("");
        fetchMovies();
        setDisplay(false);
      })
      .catch((e) => alert.error("Ocorreu um erro, tente novamente !"));
  }, [alert, director, grade, name, id, synopsis, year, fetchMovies]);

  const editMovie = useCallback(() => {
    if (display === true) {
      return (
        <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
          <div class='class="container'>
            <div class="py-4">
              <div
                class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div"
                id="close-body-container"
              >
                <div className="bg-red-100" id="close-container">
                  <AiFillCloseSquare
                    id="closeIcon"
                    onClick={() => setDisplay(false)}
                  />
                </div>
                <div>
                  <div class="py-8 px-4 bg-red-100 rounded-b-md fd-cl">
                    <label
                      class="block text-sm text-gray-00 text-red-900"
                      for="movie_name"
                    >
                      Nome do filme
                    </label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-white rounded"
                      id="movie_name"
                      name="movie_name"
                      type="text"
                      required=""
                      placeholder="Nome do filme"
                      aria-label="Nome do filme"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                    <label
                      class="block text-sm text-gray-00 text-red-900"
                      for="movie_year"
                    >
                      Ano de lançamento
                    </label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-white rounded"
                      id="movie_year"
                      name="movie_year"
                      type="text"
                      required=""
                      placeholder="Ano de lançamento"
                      aria-label="Ano de lançamento"
                      value={year}
                      onChange={(event) => {
                        setYear(event.target.value);
                      }}
                    />
                    <label
                      class="block text-sm text-gray-00 text-red-900"
                      for="movie_synopsis"
                    >
                      Sinopse
                    </label>
                    <input
                      class="w-full px-5 py-5 text-gray-700 bg-white rounded"
                      id="movie_synopsis"
                      name="movie_synopsis"
                      type="text"
                      required=""
                      placeholder="Sinopse"
                      aria-label="Sinopse"
                      value={synopsis}
                      onChange={(event) => {
                        setSynopsis(event.target.value);
                      }}
                    />
                    <label
                      class="block text-sm text-gray-00 text-red-900"
                      for="movie_director"
                    >
                      Direção
                    </label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-white rounded"
                      id="movie_director"
                      name="movie_director"
                      type="text"
                      required=""
                      placeholder="Direção"
                      aria-label="Direção"
                      value={director}
                      onChange={(event) => {
                        setDirector(event.target.value);
                      }}
                    />
                    <label
                      class="block text-sm text-gray-00 text-red-900"
                      for="movie_grade"
                    >
                      Nota
                    </label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-white rounded"
                      id="movie_grade"
                      name="movie_grade"
                      type="text"
                      required=""
                      placeholder="Nota"
                      aria-label="Nota"
                      value={grade}
                      onChange={(event) => {
                        setGrade(event.target.value);
                      }}
                    />
                    <div class="mt-4">
                      <button
                        class="px-4 py-1 text-white font-light tracking-wider bg-red-900 rounded"
                        onClick={handleEdit}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }, [display, director, grade, name, synopsis, year, handleEdit]);

  const searchDirector = useCallback(() => {
    if (displayDirector === true) {
      return (
        <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
          <div class='class="container'>
            <div class="py-4">
              <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                <div>
                  <div className="bg-red-100" id="close-container">
                    <AiFillCloseSquare
                      id="closeIcon"
                      onClick={() => setDisplayDirector(false)}
                    />
                  </div>
                  <div class="py-8 px-4 bg-red-100 rounded-b-md fd-cl">
                    <div class="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal">
                      {directorMovies &&
                        directorMovies.map((index) => (
                          <a class="block group p-4 border-b">
                            <p class="font-bold text-lg mb-1 text-black text-red-900">
                              {index.name}
                            </p>
                            <p class="text-grey-darker mb-2 text-red-900">
                              {index.year}
                            </p>
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }, [displayDirector, directorMovies]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <>
      <div class="flex flex-col ...">
        <div id="flex-container-label-input-button">
          <div id="container-label-input">
            <label
              class="block text-sm text-gray-00 text-red-900"
              for="movie_search"
            >
              Pesquise um filme
            </label>
            <input
              class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="searchMovie"
              name="searchMovie"
              type="text"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4" id="grid-colums">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                name={movie.name}
                year={movie.year}
                synopsis={movie.synopsis}
                director={movie.director}
                grade={movie.grade}
                id={movie.id}
                handleDelete={handleDelete}
                setDisplay={setDisplay}
                setDisplayDirector={setDisplayDirector}
                setDirectorMovies={setDirectorMovies}
                setName={setName}
                setYear={setYear}
                setSynopsis={setSynopsis}
                setDirector={setDirector}
                setGrade={setGrade}
                setId={setId}
              />
            ))}
        </div>
      </div>
      {editMovie()}
      {searchDirector()}
    </>
  );
}

export default Moviebody;
