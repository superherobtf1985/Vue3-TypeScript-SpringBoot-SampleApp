import http from "@/http-common";

class BookApiService {
  getAll(): Promise<any> {
    return http.get("/api/books");
  }

  get(id: any): Promise<any> {
    return http.get(`/api/books/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/api/books", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/api/books/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/api/books/${id}`);
  }
}

export default new BookApiService();