import http from '../http-header.js'

class PoemDataService{

    getAll(){
        return http.get("/poems")
    }

    get(id){
        return http.get('/poems/${id}')
    }

    create(data){
        return http.post("/poems", data)
    }
    update(id, data) {
        return http.put(`/poems/${id}`, data);
    }
    
    delete(id) {
        return http.delete(`/poems/${id}`);
    }
    
    deleteAll() {
        return http.delete(`/poems`);
    }
    
    findByTitle(title) {
        return http.get(`/poems?title=${title}`);
    }

}
    export default new PoemDataService()

