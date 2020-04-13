import http from "../http-header.js";

class PoemDataService {
  getAll() {
    return http.get("/Poems");
  }

  get(id) {
    return http.get("/Poems/${id}");
  }

  create(data) {
    return http.post("/Poems", data);
  }
  update(id, data) {
    return http.put(`/Poems/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Poems/${id}`);
  }

  deleteAll() {
    return http.delete(`/Poems`);
  }

  findByTitle(title) {
    return http.get(`/Poems?title=${title}`);
  }
}
export default new PoemDataService();
