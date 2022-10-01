import http from "@/common/http-common";
import type book from "@/interface/book"

class BookApiService {
  getAll(): Promise<any> {
    return http.get("/api/books");
  }

  get(id: string): Promise<any> {
    return http.get(`/api/books/${id}`);
  }

  create(book: book): Promise<any> {
    return http.post("/api/books", book);
  }

  update(book: book): Promise<any> {
    return http.put(`/api/books`, book);
  }

  delete(id: string): Promise<any> {
    return http.delete(`/api/books/${id}`);
  }
}

export default new BookApiService();