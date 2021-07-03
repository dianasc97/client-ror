import React, { useCallback } from "react";
import MoviesService from "../../services/movies";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import "./moviecard.css";

function Moviecard({
  name,
  year,
  synopsis,
  director,
  grade,
  id,
  handleDelete,
  setDisplay,
  setDisplayDirector,
  setDirectorMovies,
  setName,
  setYear,
  setSynopsis,
  setDirector,
  setGrade,
  setId,
}) {
  
  const handleSearchDirector = useCallback(async () => {
    const response = await MoviesService.director(director);
    if (response.data.length >= 1) {
      await setDirectorMovies(response.data);
    }
  }, [director, setDirectorMovies]);

  return (
    <div class='class="container'>
      <div class="py-4">
        <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
          <div>
            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl">
              <span class="block text-lg text-gray-800 font-bold tracking-wide">
                {name}
              </span>
              <span class="block text-gray-600 text-sm">
                <strong>{year}</strong>
              </span>
              <span class="block text-gray-600 text-sm">
                <strong>Sinopse:</strong> {synopsis}
              </span>
              <span class="block text-gray-600 text-sm">
                <a
                  id="director-anchor"
                  onClick={() => {
                    setDisplayDirector(true);
                    handleSearchDirector();
                  }}
                >
                  <strong>Direção: </strong>
                  {director}
                </a>
              </span>
              <span class="block text-gray-600 text-sm">
                <strong>Nota: </strong>
                {grade}
              </span>
              <div class="flex flex-row ..." id="iconsContainer">
                <AiFillDelete onClick={(event) => handleDelete(id)} />
                <AiFillEdit
                  onClick={(event) => {
                    setDisplay(true);
                    setName(name);
                    setYear(year);
                    setSynopsis(synopsis);
                    setDirector(director);
                    setGrade(grade);
                    setId(id);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moviecard;
