import React, { useCallback, useState } from "react";
import { useAlert } from "react-alert";
import MoviesService from "../../services/movies";

function AddMovieCard() {
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [synopsis, setSynopsis] = useState();
  const [director, setDirector] = useState();
  const [grade, setGrade] = useState();
  const alert = useAlert();

  const handleMovieSubmit = useCallback(() => {
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
    MoviesService.create(data).then(() => {
        alert.success("Filme adicionado com sucesso !");
        setName('');
        setYear('');
        setSynopsis('');
        setDirector('');
        setGrade('');
    }
    ).catch( e => alert.error("Ocorreu um erro, tente novamente !")
    );
  }, [alert, grade, director, name, synopsis, year]);

  return (
    <div class='class="container'>
      <div class="py-4">
        <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
          <div>
            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl">
              <label
                class="block text-sm text-gray-00 text-red-900"
                for="movie_name"
              >
                Nome do filme
              </label>
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
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
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
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
                class="w-full px-5 py-5 text-gray-700 bg-gray-200 rounded"
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
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
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
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
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
                  onClick={handleMovieSubmit}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMovieCard;
