import API from "./api";

const MoviesService = {
  index: (search) => API.get(`/movies?name=${search}`),
  create: (data) =>
    API.post("/movies", data),
  delete: (id) => API.delete(`/movies/${id}`),
  update: (data, id) => API.put(`/movies/${id}`, data),
  director: (director) => API.get(`/director?director=${director}`)
};

export default MoviesService;
